import React, {useState} from 'react';
import { pdfjs, Page, Document } from 'react-pdf';
import { FaUpload } from 'react-icons/fa';
import './PDFReader.scss';
import pdf from './Resume.pdf';
import Pagination from '../Pagination';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

const PDFReader = () => {

    const [file, setFile] = useState(pdf);
    const [numPages, setNumPages] = useState(null);
    const [page, setPage] = useState(1);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div className="container">
            <div className="container-load">
                <label for="file-upload" class="custom-file-upload">
                    <FaUpload/> Choose File
                </label>
                <input
                    id="file-upload"
                    onChange={onFileChange}
                    type="file"
                    accept="application/pdf"
                />
                {numPages ? <Pagination numPages={numPages} page={page} setPage={setPage} /> : null}
            </div>

            <div className="container-document">
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}>
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                    index + 1 === page &&
                    <Page key={`page_${index + 1}`}
                        pageNumber={index + 1}/>
                    )
                )
                }
            </Document>
            </div>
      </div>
    )
}

export default PDFReader;