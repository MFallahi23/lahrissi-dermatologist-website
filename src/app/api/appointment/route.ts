import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, appointmentDate } = body;

    const credentials = JSON.parse(
      process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON as string
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A6:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("fr-FR"), // Horodatage
            fullName,
            String(phone),
            appointmentDate,
            "En attente", // Statut
            "", // Remarques
          ],
        ],
      },
    });
    return NextResponse.json({ message: "Rendez-vous ajouté !" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Impossible d'ajouter le rendez-vous." },
      { status: 500 }
    );
  }
}
