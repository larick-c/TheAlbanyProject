// Import PolymerElement class
import {PolymerElement, html} from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/jquery/dist/jquery.js';
import '../../js/vendor/jquery.js';
import '../../js/vendor/foundation.js';
import { User } from '../../js/user.js';
import { UserGroup } from '../../js/userGroup.js';
import { Pot } from '../../js/pot.js';
import { Bill } from '../../js/bill.js';
import { BillGroup } from '../../js/billGroup.js';
import { StringAttached } from '../../js/stringAttached.js';
import { localStorageFunctions } from '../../js/localStorageFunctions.js';
class mainContainer extends PolymerElement {
    static get template() {
        return html `
            <script type="text/javascript"  src="/node_modules/jquery/dist/jquery.js" ></script>
            <script type="text/javascript"  src="/js/vendor/jquery.js"></script>
            <script type="text/javascript"  src="/js/vendor/foundation.js"></script>
<!--            <link rel = "stylesheet" type = "text/css" href = "../../css/foundation.css" />
            <link rel = "stylesheet" type = "text/css" href = "../../css/global.css" />-->
            <script type="text/javascript"  src="/js/app.js"></script>
            <style>
                :host { color: blue; }
                #body { height: 100%; }
                #body-wrapper { width: 100%; height: 100%; }
                profile-card { height: 25%; width: 25%; }
                .cell { display: inline-block; width: 100%; }
                .grid-y { margin-top: 2%; }
                paper-dialog { position: absolute;  background: Grey; top: 50%; left: 50%; transform: translate(-50%, -50%); }
            </style>
            <iron-ajax id="getUsers"
                url="/web/rest/resource/names"
                method="get"
                handle-as="json"
                on-response="getUsersResponse"
                on-error="getUsersResponse">
            </iron-ajax>
            <div id="body">
                <div id="body-wrapper">
                        <div class="grid-y">
                            <profile-card id="tableHeaders" style="width: 100%;">
                                <div class="" slot="name">Num Users: </div>
                                <div class="" slot="title">Total Due</div>
                                <div class="" slot="school">Strings</div>
                            </profile-card>
                        </div>
                        <div class="grid-y">
                            <profile-card id="tableHeaders" style="width: 100%;">
                                <div class="" slot= "name">Name</div>
                                <div class="" slot="title">Amount Due</div>
                                <div class="" slot="school">Strings-Attached</div>
                            </profile-card>
                        </div>
                        <template id="userTemplate" is="dom-repeat" items="{{users}}" as="user">
                            <div class="grid-y">
                                <div class="cell shrink">
                                    <profile-card style="width: 100%;" user="{{user}}"></profile-card>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <paper-dialog id="newUserDialog">
                <div>Hello This is a Dialog</div>
            </paper-dialog>
        `;

    }
    constructor() {
      super();
      this.mode = 'auto';
    }

    static get properties() {
      return {
        mode: String,

        users: {
          type: Array,
          value: [],
          notify: true
        },
        pot: {
          type: Object,
          value: {},
          notify: true
        },
        bills: {
          type: Array,
          value: [],
          notify: true
        }
      }
    }
    // Element class can define custom element reacti        console.log('profile-card created!');ons
    connectedCallback() {
        super.connectedCallback();
        console.log("connectedCallback()");
    }
    ready() {
        console.log("Main Container ready");
        super.ready();
//        console.log(this.mode);
//        console.log(this.users);
//        this.pot = new Pot();
        //this.users = new UserGroup(this.users.push("cory"));
//        var numUsers = 0;
//        var storageLocal = new localStorageFunctions();
        this.updateUsers();
//        this.users = storageLocal.getUsers();
//        if (this.users === null){
//            numUsers = 0;
//        } else {
//            numUsers = this.users.length;
//        }
    }
    updateValues(){
        this.updateUsers();
    }
    updateUsers(){
        this.$.getUsers.generateRequest();
    }
    getUsersResponse(request, response) {
        this.users = response.response;
        this.$.userTemplate.render();
    }
    newBill(){
        this.bills = new BillGroup();
        var newBillDialog = document.querySelector('#app').querySelector('new-bill-dialog');
        newBillDialog.open();
    }
    updatePot(){
        console.log('update pot');
        var localStorageBillGroup = JSON.parse(localStorage.getItem('billGroup'));
        var billGroup = new BillGroup();
        //billGroup.bills.push()
        this.pot = new Pot(localStorageBillGroup);
    }
}

// Associate the new class with an element name
customElements.define('main-container', mainContainer);