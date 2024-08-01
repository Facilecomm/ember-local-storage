import StorageObject from '@facilecomm/ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      welcomeMessageSeen: false,
      userId: null,
    };
  },
});

export default Storage;
