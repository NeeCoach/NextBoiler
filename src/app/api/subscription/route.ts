import { NextResponse } from "next/server";
import { lemonSqueezyApiInstance } from "~/utils/http";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const reqData = await req.json();
        if (!reqData.productId) {
            return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
        }

        const response = await lemonSqueezyApiInstance.post('checkouts', {
            "data": {
                "type": "checkouts",
                "relationships": {
                    "store": {
                        "data": {
                            "type": "stores",
                            "id": process.env.LEMONSQUEEZY_STORE_ID?.toString()
                        }
                    },
                    "variant": {
                        "data": {
                            "type": "variants",
                            "id": reqData.productId.toString()
                        }
                    }
                }
            }
        });
        console.log(response.data.data.attributes);
        const checkoutUrl = response.data.data.attributes;
        return NextResponse.json({ data: checkoutUrl }, { status: 201 });
    } catch (error) {
       
        return new Response(JSON.stringify({ error: error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}