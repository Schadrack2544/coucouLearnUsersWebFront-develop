import React from 'react';
import { useParams } from 'react-router-dom';
//import { Document, Page } from 'react-pdf';
import {} from '@mui/'
import UserWidget from 'modules/widgets/UserWidget';
import Topper from '../_Partials/Dashboard/Topper';
const SingleBookActivity = ({ data }) => {
  const params = useParams();
  //const id = params.id;
  // const [numPages, setNumPages] =React.useState(null);
  // const [pageNumber, setPageNumber] =React.useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <UserWidget>
      <Topper title="Amazi n'umuriro" />
      <div className="w-full h-auto">
      {/* <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
          <div className="pageNumber text-center">
              page 2 of 10
          </div>,
          <div className="PageHolder h-[1400px] w-[500px]">
           <div className="h-[700px] w-[500px]">
            <img src="../../../assets/unsplash_rxB0L6nrP5M.png" className="object-cover"/>
           </div>
           <div className="h-[700px] w-[500px]">
            Lorem Ipsum est un texte d'espace réservé  couramment utilisé dans les industries graphique,  imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.

            Lorem Ipsum est un texte d'espace réservé  couramment utilisé dans les industries graphique,  imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.

            Lorem Ipsum est un texte d'espace réservé  couramment utilisé dans les industries graphique,  imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.

            Lorem Ipsum est un texte d'espace réservé  couramment utilisé dans les industries graphique,  imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles
           </div>
          </div>
          <div className="bookController flex flex-start items-center  py-5">
               {/* icons for  controller  */}
          </div>
          <div>
            <audio src="" controls/>
          </div>
          <div>
            
          </div>
      </div>
      <div>

      </div>
    </UserWidget>
  );
};

export default SingleBookActivity;
