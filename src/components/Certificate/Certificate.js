import React from 'react'
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'
import { saveAs } from 'file-saver';
import './certificate.scss'

function Certificate({ participantName }) {
    var uri = "";
    async function generatePDF(name){
        // fetching the certificate template pdf 
        const exBytes = await fetch("./assets/democert.pdf").then((res) => {
            return res.arrayBuffer()
        });

        // fetching the font to be used
        const exFont = await fetch("./assets/RobotoMono-Regular.ttf").then((res) => {
            return res.arrayBuffer()
        })

        const pdfDoc = await PDFDocument.load(exBytes);

        pdfDoc.registerFontkit(fontkit);
        const myFont = await pdfDoc.embedFont(exFont);
        // setting font size and vertical offset
        const textSize = 30;
        const yOffset = 360;
        //alligning text to the center
        const textWidth = myFont.widthOfTextAtSize(name, textSize);
        
        const pages = pdfDoc.getPages();
        const FirstPage = pages[0];

        FirstPage.drawText(name, {
            x: FirstPage.getWidth() / 2 - textWidth / 2,
            y: yOffset,
            size: 30,
            font: myFont,
            color: rgb(0, 0, 0)
        })

        uri = await pdfDoc.saveAsBase64({dataUri: true})
        
        // document.querySelector("#pdf-frame").src = uri;
        // window.open(uri)
        return;
    }
    generatePDF(participantName);

    function downloadCertificate(){
        saveAs(uri, "Certificate", {autoBom: true})
        return;
    }

    return (
        <>
            {/* <iframe id='pdf-frame'></iframe> */}
            <button onClick={ downloadCertificate } id="download-btn" >Download Certificate</button>
            <script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"></script>
        </>
    )
}

export default Certificate