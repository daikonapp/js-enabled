# Daikon App layout

## An App Full stack with MERN

   - home page
   - a profile page
   - a page named feed
   - a create page

    1. the user should be able to write a post/story/article etc
    2. in that post user should be allowed to add links
    3. user should be able to add images
    4. user should be able to add videos (YouTube api, which is in an i-frame, Video upload functionality- requires Backend effort as well - multer is an package which helps us to upload files.

    - on the feeds page, call the api to fetch all those posts, and show them, maybe like Fb, twitter, instagram,

    1. this can include posts in card UI.

    - same ideology on the profile page.

    1. email, name, gender, profile-image
    1.1. Backend task - create an api which accepts these three fields and saves them in database
    1.2. Frontend task - consume that API on load of profile page, render those details.
    1.3. Frontend task - allow user to modify these details, considering email is unique-key. Call an PUT api to BE which stores the updated data in Database.
    1.4. Backend task - create an PUT api to update profile data in DB.
    1.5. profile image should be taken care of in the same API. (use multer here again)

    - Miscelleanous

    1. trending page to show latest news (5-10 news)
    1.1. request our own bacckend, BE will request i.e., use reddit api to fetch the details and show them here.
    1.2. FE should render them in minimal.

    2. since Ash is on the team, we can integrate SEO related stuff, like meta-tags on our front-end.
