// Import PolymerElement class
import {PolymerElement, html} from '../../node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/paper-dialog/paper-dialog.js';
class removeUserDialog extends PolymerElement {
    static get template() {
        return html `
            <style>
                .card {
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                  text-align: center;
                }

                .title {
                  color: grey;
                  font-size: 18px;
                }

                button {
                  border: none;
                  outline: 0;
                  display: inline-block;
                  padding: 8px;
                  color: white;
                  background-color: #000;
                  text-align: center;
                  cursor: pointer;
                  width: 100%;
                  font-size: 18px;
                }

                a {
                  text-decoration: none;
                  font-size: 22px;
                  color: black;
                }

                button:hover, a:hover {
                  opacity: 0.7;
                }
            </style>
            <paper-dialog id="newUserDialog">
                <div class="card">
                    <div><paper-input id="nameInput" label="Name"></paper-input></div>
                    <div><paper-input id="titleInput" label="Title"></paper-input></div>
                    <div><paper-input id="schoolInput" label="School"></paper-input></div>
                    <div><paper-button id="saveNewUser" on-click="saveUser">SAVE</paper-button></div>
                    <div><paper-button id="clearLocalStorage" on-click="clearLocalStorage">CLEAR</paper-button></div>
                </div>
            </paper-dialog>

        `;

    }
    // Element class can define custom element reacti        console.log('profile-card created!');ons
    connectedCallback() {
        super.connectedCallback();

    }

    ready() {
        super.ready();
    }
    open(){
        this.$.newUserDialog.open();
    }
    saveUser(){
        var user = new Object()
        user.name = this.$.nameInput.value;
        user.title = this.$.titleInput.value;
        user.school = this.$.schoolInput.value;
        var localUsers = JSON.parse(localStorage.getItem('items'));
        if (localUsers !== null & localStorage.length !== 0){
            localUsers.push(user);
            localStorage.setItem('items', JSON.stringify(localUsers));
        } else {
            var users = [];
            users.push(user);
            localStorage.setItem('items', JSON.stringify(users));
        }
        var template = document.querySelector('#mainContainer');
        template.ready();
    }
    clearLocalStorage(){
        localStorage.clear();
    }
}

// Associate the new class with an element name
customElements.define('remove-user-dialog', removeUserDialog);