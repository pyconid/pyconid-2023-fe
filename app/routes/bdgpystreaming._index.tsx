import type { V2_MetaFunction } from "@remix-run/node"

import { Layout } from "~/components"

export const meta: V2_MetaFunction = () => {
    return [
        { title: "PyCon ID 2023 - Bandung.py Streaming" },
        {
            name: "description",
            content: "Bandung.py Streaming.",
        },
    ]
}

export default function Index() {
    const studioID = "8biqBKFN7RwP";
    return (
        <Layout>
            <div className="flex min-h-[300px] w-full items-center bg-primary-100 lg:min-h-[430px] 2xl:min-h-[550px] lg:px-5">
                <div className="mx-auto my-10 flex w-full max-w-7xl flex-col items-center justify-between md:flex-col 2xl:flex-row lg:flex-row">
                    <div 
                        className="w-full h-[26vh] md:h-[36vh] lg:h-[70vh] xl:h-[76vh] relative"
                    >
                        <iframe
                            src={`https://streamyard.com/watch/${studioID}?embed=true`}
                            width="100%"
                            height="100%"
                            allowFullScreen
                            className="w-[90%] h-[90%] mx-auto border border-solid border-primary-200"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )
}