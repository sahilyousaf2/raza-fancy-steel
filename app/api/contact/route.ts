import { NextRequest, NextResponse } from "next/server";

// Placeholder for Google Apps Script Web App URL
// Replace this with your actual Google Apps Script Web App URL
const SHEET_URL = process.env.GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbyDYLFFIIfufUD52oVmqMoylsgaaBUU2RucL5U-Tm_yc6fPjKmFgZS-tc1b8_DFsgQ/exec";

export async function POST(request: NextRequest) {
  console.log("[Contact API] Received request to /api/contact");
  console.log("[Contact API] Google Sheet URL configured:", SHEET_URL !== "https://script.google.com/macros/s/AKfycbyDYLFFIIfufUD52oVmqMoylsgaaBUU2RucL5U-Tm_yc6fPjKmFgZS-tc1b8_DFsgQ/exec" ? "Yes" : "No - Please set GOOGLE_SHEET_URL env variable");

  try {
    const body = await request.json();
    console.log("[Contact API] Request body:", JSON.stringify(body));

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      console.log("[Contact API] Validation failed: Missing required fields");
      return NextResponse.json(
        { status: "error", message: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log("[Contact API] Validation failed: Invalid email format");
      return NextResponse.json(
        { status: "error", message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Google Sheet URL is configured
    if (SHEET_URL === "YOUR_GOOGLE_SCRIPT_URL") {
      console.log("[Contact API] Error: Google Sheet URL not configured");
      return NextResponse.json(
        { 
          status: "error", 
          message: "Google Sheet URL not configured. Please set the GOOGLE_SHEET_URL environment variable.",
          isConfigured: false
        },
        { status: 500 }
      );
    }

    console.log("[Contact API] Forwarding data to Google Sheets...");

    const response = await fetch(SHEET_URL, {
      method: "POST",
      body: JSON.stringify({
        ...body,
        submittedAt: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("[Contact API] Google Sheets response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("[Contact API] Google Sheets error:", errorText);
      return NextResponse.json(
        { status: "error", message: "Failed to submit to Google Sheets" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("[Contact API] Success! Data submitted to Google Sheets");

    return NextResponse.json({ 
      status: "success", 
      message: "Form submitted successfully",
      data 
    });
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      { status: "error", message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
