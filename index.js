function setPropertyRequired(attributeName, boolValue = true) {
  //обов"язкове
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.required = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyHidden(attributeName, boolValue = true) {
  //приховане
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.hidden = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyDisabled(attributeName, boolValue = true) {
  //недоступне
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.disabled = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function onCreate() {
  setAttrValue("Approval", 242597);
  setAttrValue("AddReview ", 242646);
  setInitialProps();
}

function setInitialProps() {
  var Proceedings = EdocsApi.getAttributeValue("Proceedings").value;
  if (Proceedings) {
    switch (Proceedings) {
      case "Студент":
        setPropertyHidden("Student", false);
        setPropertyHidden("Info", false);
        setPropertyRequired("STD_NAME");
        break;

      case "Викладач":
        setPropertyHidden("Teacher", false);
        setPropertyHidden("info2", false);
        setPropertyRequired("TeacherName");
        break;

      default:
        break;
    }
  }
}
