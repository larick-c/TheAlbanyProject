// Import PolymerElement class
import { PolymerElement, html } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/paper-dialog/paper-dialog.js';
import { localStorageFunctions } from '../../js/localStorageFunctions.js';

class newUserDialog extends PolymerElement {
  static get template() {
    return html`
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
            <iron-ajax id="createUser"
                url="/theAlbanyProject/resource/createUser?firstName={{firstName}}&lastName={{lastName}}"
                handle-as="json"
                on-response="handleResponse"
            </iron-ajax>
            <paper-dialog id="newUserDialog">
                <div class="card">
                    <div><paper-input id="firstNameInput" label="First Name"></paper-input></div>
                    <div><paper-input id="lastNameInput" label="Last Name"></paper-input></div>
                    <div id="saveNewUser"><paper-button on-click="saveUser">SAVE</paper-button></div>
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
    };
  } // Element class can define custom element reacticonsole.log('profile-card created!');ons


  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
    this.localStorage = new localStorageFunctions();
  }

  open() {
    this.$.firstNameInput.value = "";
    this.$.lastNameInput.value = "";
    this.$.newUserDialog.open();
  }

  close() {
    this.$.newUserDialog.close();
  }

  saveUser() {
    if (this.$.firstNameInput.value !== "" && this.$.lastNameInput.value !== "") {
      this.firstName = this.$.firstNameInput.value;
      this.lastName = this.$.lastNameInput.value;
      this.$.createUser.generateRequest();
    }
  }

} // Associate the new class with an element firstName


customElements.define('new-user-dialog', newUserDialog);