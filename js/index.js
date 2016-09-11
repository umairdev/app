/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var check = 0;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('loading');
    },
    onDeviceOnline: function() {
        app.deviceOnline();
    },
    onDeviceOffline: function() {
        app.deviceOffline();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.addEventListener('online', this.onDeviceOnline, false);
        document.addEventListener('offline', this.onDeviceOffline, false);
        // if((navigator.network.connection.type).toUpperCase() == "NONE" && (navigator.network.connection.type).toUpperCase() == "UNKNOWN") {
        //     this.deviceOffline();
        // }
        // else {
        //     this.deviceOnline();
        // }
        var splashElement = document.getElementById(id);
        var beginApp = document.getElementById('deviceready');
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        console.log('Check: ' + check);
        splashElement.setAttribute('style', 'display:none;');
        beginApp.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        console.log('Check: ' + check);
    },
    deviceOnline: function() {
        check = 1;
        console.log(test);
    },
    deviceOffline: function() {
        check = 2;
    }
};

var physician_data_text = '{ "physician" : [' +
'{ "firstName":"John" , "lastName":"Doe" , "speciality":"general" , "clinic":"sugarland" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"dentist" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"gyna" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"cardio" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"allergist" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"dermatologist" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"microbiologist" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"neorologist" , "clinic":"sugarland 2" },' +
'{ "firstName":"Anna" , "lastName":"Smith" , "speciality":"oncologist" , "clinic":"sugarland 2" },' +
'{ "firstName":"Peter" , "lastName":"Jones" , "speciality":"pediatrician" , "clinic":"richmond" } ]}';

var speciality_data_text = '{ "speciality" : [' +
'{ "name":"general" },' +
'{ "name":"dentist" },' +
'{ "name":"gyna" },' +
'{ "name":"cardio" },' +
'{ "name":"allergist" },' +
'{ "name":"dermatologist" },' +
'{ "name":"microbiologist" },' +
'{ "name":"neorologist" },' +
'{ "name":"oncologist" },' +
'{ "name":"pediatrician" } ]}';

var clinic_data_text = '{ "clinic" : [' +
'{ "clinicName":"sugarland" , "streetAddress":"4710 Abingdon Ct" , "city":"sugar land" , "state":"texas" , "zip":"77449" },' +
'{ "clinicName":"sugarland 2" , "streetAddress":"5322 Mornington Dr" , "city":"sugar land" , "state":"texas" , "zip":"77498" },' +
'{ "clinicName":"richmond" , "streetAddress":"5114 Stone Island Ct" , "city":"richmond" , "state":"texas" , "zip":"77407" } ]}';

var physician_obj = JSON.parse(physician_data_text);
var speciality_obj = JSON.parse(speciality_data_text);
var clinic_obj = JSON.parse(clinic_data_text);