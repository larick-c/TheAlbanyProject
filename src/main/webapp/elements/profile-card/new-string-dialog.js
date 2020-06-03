// Import PolymerElement class
import {PolymerElement, html} from '../../node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/paper-dialog/paper-dialog.js';
import { localStorageFunctions } from '/../../js/localStorageFunctions.js';
import { StringAttached } from '/../../js/stringAttached.js';
class newStringDialog extends PolymerElement {
    static get template() {
        return html `
            <style>
                .card {
                  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
                  text-align: center;
                  margin-top: 0;
                  margin-bottom: 0;
                  border: solid lightskyblue;
                }

                .lastName {
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
                paper-button { background: lightskyblue; }
                #saveNewUser { display: inline-block; margin-bottom: 15%; margin-top: 12%; }
                #closeDialog { display: inline-block; }
            </style>
            <paper-dialog id="newUserDialog">
                <div class="card">
                    <div><paper-input id="toInput" label="To"></paper-input></div>
                    <div><paper-input id="fromInput" label="From"></paper-input></div>
                    <div><paper-input id="stringInput" label="String"></paper-input></div>
                    <div><paper-input id="stringAmountInput" label="Amount"></paper-input></div>
                    <div id="saveNewUser"><paper-button on-click="saveString">SAVE</paper-button></div>
                    <div id="closeDialog"><paper-button on-click="close">CLOSE</paper-button></div>
                </div>
            </paper-dialog>
        `;

    }
    static get properties() {
        return {
            mode: String,

            localStorage: {
                type: Object,
                value: {},
                notify: true
            }
        }
    }
    // Element class can define custom element reacti        console.log('profile-card created!');ons
    connectedCallback() {
        super.connectedCallback();

    }

    ready() {
        super.ready();
        this.localStorage = new localStorageFunctions();
        var toInput = this.$.toInput;
        var fromInput = this.$.lastNameInput;
        var stringAmountInput = this.$.stringAmountInput;
    }
    open(){
        this.$.toInput.value = "";
        this.$.fromInput.value = "";
        this.$.stringAmountInput.value = "";
        this.$.newStringDialog.open();
    }
    close(){
        this.$.newStringDialog.close();
    }
    saveUser(){
        if (this.$.toInput.value !== "" && this.$.lastNameInput.value !== "" & this.$.schoolInput.value !== ""){
            var stringAttached = new StringAttached();
            stringAttached.to = this.$.toInput.value;
            stringAttached.from = this.$.fromInput.value;
            stringAttached.amount = this.$.stringAmountInput.value;
            var storageLocal = this.localStorage;
            var localUsers = storageLocal.getUsers();
            if (localUsers !== null & localStorage.length !== 0){
                localUsers.push(user);
                storageLocal.saveUsers(localUsers);
            } else {
                var newUsers = [];
                newUsers.push(user);
                storageLocal.saveUsers(newUsers);
            }
            var template = document.querySelector('#mainContainer');
            template.ready();
            this.close();
            window.scrollTo(0, 0);
        }
    }
}

// Associate the new class with an element toInput
customElements.define('new-string-dialog', newStringDialog);