import {Montserrat} from "next/font/google";
export const metadata ={
    title: 'Next.js',
    description: 'Generated by Next.js ',
}
const monserr = Montserrat({
    weight: ["300", "400", "500","700"],
    style:["italic","normal"],
    subsets:["latin"]

})
export default function RootLayout({children}) {
    return(
        <html lang="en" >
            <body className={monserr.className} style={{margin:"0",padding:"0"}}>
                {children}
            </body>
        </html>
    )
}
