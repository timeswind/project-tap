const { Text, Relationship, Url } = require('@keystonejs/fields');

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { user: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

const ProfileScheme = {
    fields: {
        firstName: {
            type: Text,
            isRequired: false,
        },
        lastName: {
            type: Text,
            isRequired: false,
        },
        contact_email: {
            type: Text,
            isRequired: false,
        },
        instagram_link: {
            type: Url,
            isRequired: false,
        },
        user: {
            type: Relationship,
            ref: 'User',
            isRequired: false,
        }
    },
    access: {
        read: access.userIsAdminOrOwner,
        update: access.userOwnsItem,
        create: access.userIsAdmin,
        delete: access.userOwnsItem,
        auth: true,
    }
};

module.exports = ProfileScheme;