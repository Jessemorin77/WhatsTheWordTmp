import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db';

export async function POST(req: NextRequest) {
    try {
        
        const requestData = await req.json(); // Using NextRequest.json() to parse the body
        const { school, location } = requestData;
        
        const events = await db.event.findMany({
          where: {
            OR: [
              { cityState: location }, // `userInput` is the value input by the user
              { school: school }
            ],
          },
        });
        

        // Return events using NextResponse.json()
        return NextResponse.json(events);
    } catch (error) {
        console.error("Failed to fetch events:", error);
        return new NextResponse("Failed to fetch events", { status: 500 });
    }
}
  /**
   * 
   */