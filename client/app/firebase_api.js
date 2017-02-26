/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Initializes VirtuosoApi.
function VirtuosoApi() {
    // this.checkSetup();

    // Optional:  Get shortcuts to DOM Elements.
    //   eg:    this.messageForm = document.getElementById('message-form');

    // Optional:  Add api handlers
    //   eg:    this.messageForm.addEventListener('submit', this.saveMessage.bind(this));

    this.initFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
VirtuosoApi.prototype.initFirebase = function() {
    // Auth api
    this.auth = firebase.auth();

    // Fetches and stores state of the user's song / editor.
    this.database = firebase.database();

    // Retrieves loops and instrument data
    this.storage = firebase.storage();

    // Initiates Firebase auth and listen to auth state changes.
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

VirtuosoApi.prototype.fetchAllLoops = function() {

    var loopData = [];
    var loopsToFetch = [];


    var bassIndexPath = "loops/bass/index.json";
    var synthIndexPath = "loops/synth/index.json";
    var beatIndexPath = "loops/beat/index.json";

    var bassIndexRef = this.storage.ref(bassIndexPath);
    var synthIndexRef = this.storage.ref(synthIndexPath);
    var beatIndexRef = this.storage.ref(beatIndexPath);

    var loopIntstrumentIndexes = [];

    loopIntstrumentIndexes.push(bassIndexRef.getDownloadUrl());
    loopIntstrumentIndexes.push(synthIndexRef.getDownloadUrl());
    loopIntstrumentIndexes.push(beatIndexRef.getDownloadUrl());

    loopIntstrumentIndexes = Promise.all(loopIntstrumentIndexes); // await the urls.

    // Assimilate a list of loops to fetch
    for (var indexUrl in loopIntstrumentIndexes) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', indexUrl, false);
        xhr.send();

        // response will be a list of loop index entries (see loops/synth/index.json for example)
        // iterate over index entries.  add filepaths to download list
        var indexEntries = JSON.parse(xhr.responseText);
        for (var entry in indexEntries) {
            loopsToFetch.push(entry.filepath);
        }
    }

    // Get the fetchable urls for the loop json reference
    var fetchableUrls = [];
    for (var loopUrl in loopsToFetch) {
        fetchableUrls.push(this.storage.ref(loopUrl).getDownloadUrl());
    }

    fetchableUrls = Promise.all(fetchableUrls);

    // Fetch the loops.  Assimilate a list of JSON strings for each loop.
    for (var loopUrl in fetchableUrls) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', loopUrl, false);
        xhr.send();

        // response will be a list of loop index entries (see loops/synth/index.json for example)
        // iterate over index entries.  add filepaths to download list
        var loopJsonStr = xhr.responseText;
        loopData.push(loopJsonStr);
    }

    return loopData;
};

// Saves a new message containing an image URI in Firebase.
// This first saves the image in Firebase storage.
VirtuosoApi.prototype.saveImageMessage = function(event) {
    var file = event.target.files[0];

    // Clear the selection in the file picker input.
    this.imageForm.reset();

    // Check if the file is an image.
    if (!file.type.match('image.*')) {
        var data = {
            message: 'You can only share images',
            timeout: 2000
        };
        this.signInSnackbar.MaterialSnackbar.showSnackbar(data);
        return;
    }
// Check if the user is signed-in
    if (this.checkSignedInWithMessage()) {

        // We add a message with a loading icon that will get updated with the shared image.
        var currentUser = this.auth.currentUser;
        this.messagesRef.push({
            name: currentUser.displayName,
            imageUrl: VirtuosoApi.LOADING_IMAGE_URL,
            photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
        }).then(function(data) {

            // Upload the image to Firebase Storage.
            var filePath = currentUser.uid + '/' + data.key + '/' + file.name;
            return this.storage.ref(filePath).put(file).then(function(snapshot) {

                // Get the file's Storage URI and update the chat message placeholder.
                var fullPath = snapshot.metadata.fullPath;
                return data.update({imageUrl: this.storage.ref(fullPath).toString()});
            }.bind(this));
        }.bind(this)).catch(function(error) {
            console.error('There was an error uploading a file to Firebase Storage:', error);
        });
    }
};

// Signs-in Friendly Chat.
VirtuosoApi.prototype.signIn = function() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
};

// Signs-out of Friendly Chat.
VirtuosoApi.prototype.signOut = function() {
    // Sign out of Firebase.
    this.auth.signOut();
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
VirtuosoApi.prototype.onAuthStateChanged = function(user) {
    if (user) {
        // User is signed in
        // TODO: tell components to update as necessary for user login event
        //   probably should fetch relevant songs for user
    } else {
        // User is signed out
        // TODO: tell components to update as necessary for user logout event
    }
};

// Returns true if user is signed-in. Otherwise false and displays a message.
VirtuosoApi.prototype.checkSignedInWithMessage = function() {
    // Return true if the user is signed in Firebase
    if (this.auth.currentUser) {
        return true;
    }
    // // Display a message to the user using a Toast.
    // var data = {
    //     message: 'You must sign-in first',
    //     timeout: 2000
    // };
    // this.signInSnackbar.MaterialSnackbar.showSnackbar(data);
    return false;
};

// Resets the given MaterialTextField.
VirtuosoApi.resetMaterialTextfield = function(element) {
    element.value = '';
    element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
};

// Template for messages.
VirtuosoApi.MESSAGE_TEMPLATE =
    '<div class="message-container">' +
    '<div class="spacing"><div class="pic"></div></div>' +
    '<div class="message"></div>' +
    '<div class="name"></div>' +
    '</div>';

// A loading image URL.
VirtuosoApi.LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';

// TODO:  Register callbacks for updating UI?


// // Checks that the Firebase SDK has been correctly setup and configured.
// VirtuosoApi.prototype.checkSetup = function() {
//     if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
//         window.alert('You have not configured and imported the Firebase SDK. ' +
//             'Make sure you go through the codelab setup instructions.');
//     } else if (config.storageBucket === '') {
//         window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
//             'actually a Firebase bug that occurs rarely. ' +
//             'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
//             'and make sure the storageBucket attribute is not empty. ' +
//             'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
//             'displayed there.');
//     }
// };

window.onload = function() {
    window.VirtuosoApi = new VirtuosoApi();
};
