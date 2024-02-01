export const downloadCV = () => {
  const pdfUrl = "../assets/files/cv.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "cv.pdf";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
