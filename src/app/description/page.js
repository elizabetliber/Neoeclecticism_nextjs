import React from 'react';
import Collab from "@/app/components/Collab";
import Author from "@/app/components/Author"
import Discover from "@/app/components/Discover";
import Optimism from "@/app/components/Optimism";
import Printing from "@/app/components/Printing";


function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-[#000B00] px-12 py-14">
            <container className="container mx-auto">
                <Collab/>
                <Author/>
                <Discover/>
                <Optimism/>
                <Printing/>
                {/*<Question/>*/}
            </container>
        </main>
    );
}

export default Page;