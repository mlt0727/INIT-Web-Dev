console.log("Workday autofill extension loaded! loaded on " + window.location.href);

function fillField() {
    simpleFields.forEach(({ id, value }) => {
        let selectField = document.getElementById(id);
        if (selectField) {
            selectField.value = value;
            selectField.dispatchEvent(new Event("input", { bubbles: true }));
        }
    });
}

const simpleFields = [
    { id: "name--legalName--firstName", value: "Lingtong" },
    { id: "name--legalName--lastName", value: "Meng" },
    { id: "address--city", value: "Wellington" },
    { id: "address--postalCode", value: "33414" },
    { id: "phoneNumber--phoneNumber", value: "561-388-0366" },
];


setTimeout(fillField, 5000);