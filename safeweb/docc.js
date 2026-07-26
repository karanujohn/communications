/* =========================
   VIEW DOCUMENT
========================= */

function viewDocument(documentName, documentURL) {

    const modal =
        document.getElementById("documentModal");

    const title =
        document.getElementById("documentTitle");

    const frame =
        document.getElementById("documentFrame");


    title.textContent = documentName;

    frame.src = documentURL;

    modal.style.display = "block";

}


/* =========================
   CLOSE DOCUMENT
========================= */

function closeDocument() {

    const modal =
        document.getElementById("documentModal");

    const frame =
        document.getElementById("documentFrame");


    modal.style.display = "none";

    frame.src = "";

}


/* =========================
   SEARCH DOCUMENTS
========================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener(
    "keyup",
    function () {

        const searchValue =
            searchInput.value.toLowerCase();


        const documents =
            document.querySelectorAll(
                ".document-card"
            );


        documents.forEach(
            function (document) {

                const title =
                    document
                    .getAttribute("data-title")
                    .toLowerCase();


                if (title.includes(searchValue)) {

                    document.style.display =
                        "block";

                } else {

                    document.style.display =
                        "none";

                }

            }
        );

    }
);


/* =========================
   CLOSE WHEN CLICKING
   OUTSIDE THE MODAL
========================= */

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("documentModal");


        if (event.target === modal) {

            closeDocument();

        }

    }
);