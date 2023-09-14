import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {NextResponse, type NextRequest } from "next/server";

export const dynamic ='force-dynamic';

export async function GET (request: NextRequest){
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    
    if (code !== null){
        const supabase = createRouteHandlerClient({cookies})
        // getback user session by code
        await supabase.auth.exchangeCodeForSession(code);
    }
    
    return NextResponse.redirect(requestUrl.origin)
}