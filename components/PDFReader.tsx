import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const PDFReader = ({ url }: { url: string }) => {
  return (
    <PDFViewer
      document={{
        url: url,
      }}
    />
  );
};
export default PDFReader;
