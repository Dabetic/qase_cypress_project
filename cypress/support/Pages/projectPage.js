const projectPage = {

//CSS

"createNewProjectBtn": "#createButton",
"projectNameInput": "#project-name",
"projectCodeInput": "#project-code",
"descInput": "#description-area",

"searchForProjectInput": ".form-control",
"kebabMenu": ".ZwgkIF > .svg-inline--fa",
"kebabRemoveBtn": '[class="KXyzbV IhDC1_ rHqCyR"]',
"kebabDeleteProjectBtn": ".b_jd28 > .ZwgkIF",


//xPath 
"projAccessTypeRadio": {
   "private": "//*[contains(text(), 'Private')]",
   "public": "//*[contains(text(), 'Public')]"
},
"memberAccessTypeRadio": {
    "addAllMemb" : "//*[contains(text(), 'Add all members to this project')]",
    "dontAddMemb" : '//*[contains(text(), "Don\'t add members")]'
},

"createAProjectBtn": "//*[contains(text(), 'Create project')]"

}

module.exports = {
    projectPage
}