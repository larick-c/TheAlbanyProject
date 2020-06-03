// Import PolymerElement class
import {PolymerElement, html} from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@polymer/paper-dialog/paper-dialog.js';
import { Bill } from '../js/bill.js';
import { BillGroup } from '../js/billGroup.js';
class newBillDialog extends PolymerElement {
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
                paper-button { background: lightskyblue; }
                #saveNewUser { display: inline-block; margin-bottom: 15%; margin-top: 12%; }
                #closeDialog { display: inline-block; }
                #usersConnectedToBill { text-align: left; }
            </style>
            <paper-dialog id="newBillDialog">
                <div class="card">
                    <div><paper-input id="billNameInput" label="Bill Name"></paper-input></div>
                    <div><paper-input id="billAmountInput" label="Amount"></paper-input></div>
                    <div id="usersConnectedToBill">
                        <div><p>Who's attached to this bill?<p></div>
                        <template id="userTemplate" is="dom-repeat" items="{{users}}" as="user">
                            <div><paper-checkbox value="{{user.id}}"></paper-checkbox>{{user.name}}</div>
                        </template>
                    </div>
                    <div id="saveNewUser"><paper-button on-click="attachUserToBill">SAVE</paper-button></div>
                    <div id="closeDialog"><paper-button on-click="close">CLOSE</paper-button></div>
                </div>
            </paper-dialog>

        `;

    }
    // Element class can define custom element reacti console.log('profile-card created!');ons
    connectedCallback() {
        super.connectedCallback();

    }
    static get properties() {
        return {
            mode: String,

            users: {
                type: Array,
                value: [],
                notify: true
            },
            usersAttachedToBill: {
                type: Array,
                value: [],
                notify: true
            }
        }
    }

    ready() {
        super.ready();
        var billNameInput = this.$.billNameInput;
        var billAmountInput = this.$.billAmountInput;
        this.usersAttachedToBill = [];
    }
    open(){
        this.$.billNameInput.value = "";
        this.$.billAmountInput.value = "";
        this.usersAttachedToBill = [];
        this.users = JSON.parse(localStorage.getItem('users'));
        this.$.newBillDialog.open();
    }
    close(){
        this.$.newBillDialog.close();
    }
    attachUserToBill(){
        var this_ = this;
        this.getUsersAttached();
        var bill = new Bill(this.$.billNameInput.value,this.$.billAmountInput.value, this_.usersAttachedToBill);
        this.addStringToBillGroup(bill);
    }
    getUsersAttached(){
        var this_ = this;
        var checkboxes = this.shadowRoot.querySelector('#usersConnectedToBill').querySelectorAll('paper-checkbox');
        checkboxes.forEach(function(checkbox){
            if (checkbox.checked){
                //Check for user with checkbox id
                var userId = checkbox.value;
                this_.users.forEach(function(user){
                    if (user.id === userId){
                        this_.usersAttachedToBill.push(user);
                    }
                });
            }
        });
    }
    addStringToBillGroup(bill){
        var localStorageBillGroup = JSON.parse(localStorage.getItem('billGroup'));
        localStorageBillGroup.bills.push(bill);
        localStorage.setItem('billGroup', JSON.stringify(localStorageBillGroup));
        var mainContainer = document.querySelector('#app').querySelector('#mainContainer');
        mainContainer.updatePot();
        this.close();
    }
}

// Associate the new class with an element name
customElements.define('new-bill-dialog', newBillDialog);