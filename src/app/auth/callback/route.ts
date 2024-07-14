import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");
    const origin = requestUrl.origin;

    if (code) {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Error exchanging code for session:", error.message);
        return NextResponse.redirect(
          `${origin}/login?message=${encodeURIComponent(
            "Could not authenticate user"
          )}`
        );
      }
    }

    return NextResponse.redirect(`${origin}/protected`);
  } catch (error) {
    console.error("Error in callback route:", error);
    return NextResponse.redirect(
      "/login?message=An error occurred during authentication"
    );
  }
}
