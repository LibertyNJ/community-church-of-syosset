# Community Church of Syosset Website

Created by Nathaniel J. Liberty, with love for the Community Church of Syosset.

## Contents

1. [Contents](#contents)
2. [About](#about)
3. [Features](#features)

   - Responsive design
   - Progressive enhancement
   - Layout
   - Homepage
   - Events
   - Services
   - Images
   - Mission
   - About
   - Visit
   - Contact
   - 404 Page

4. [Managing content](#managing-content)

   - Footer

5. [Integrated services](#integrated-services)

   - Contentful
   - GitHub
   - Google Maps
   - Netlify

## About

This readme is a walkthrough of features, and a guide to using the newly redesigned Community Church of Syosset website.

For answers to any questions that aren't answered here, or to request new features or changes to features, please feel free to contact Nathaniel.

## Features

### Branding

A new Community Church of Syosset logo and color scheme was created as part of this website design. Every effort was made to create a consistent, clean, easy-to-use, high-contrast look that leaves a positive impact on the user.

### Responsive design

The website was created with a mobile-first design that automatically resizes and adjusts the size, layout, and functionality of different components to match the user's device. The design will smartly adapt to most smartphones, tablets, laptops, and desktop computers.

### Progressive enhancement

Using a basic-functionality-first approach, many features of the website are designed to continue to work even when more advanced features and technologies are not supported by the user's device, or fail to work for any other reason.

### Layout

There are a few common elements to every page to ensure a consistent user experience.

#### Header

The header at the top of each page enables the user to quickly identify the website and navigate to different pages. It is fixed to the top of the window and always remains visible.

#### Footer

The footer at the bottom of each page gives the user quick access to important information including the church's address, phone number, and links to social media accounts and other UCC resources.

### Homepage

The homepage has several features to make a lively impression on first-time visitors to the site. A new Community Church of Syosset logo is featured prominently along with the church's greeting "No matter who you are, or where you are on life's journey, you are welcome here!" It also includes support for both video and image backgrounds and allows the display of an alert window for important messages.

There are two prominent call-to-action buttons encouraging users to visit the church and and view a welcome message from the pastor that begins a pathway towards learning more and visting the church.

### Events

The events page encourages users to to attend other events outside of regular Sunday services and presents a list of upcoming events.

Individual event pages present details, dates, times, and locations. Each event page integrates with Google Maps to show a local map of the surrounding area. There is also a share section that encourages users to share the event with others on social media, and provides several quick links to do so.

### Services

The services page shows an archive of past church services.

Individual service pages include a profile of the person who led that service, the date, a list of scripture readings, and support for a video of the service. There is special support for YouTube videos to enable embedded YouTube player functionality. There is also a share section that encourages users to share the service with others on social media, and provides several quick links to do so.

### Images

The images page displays a list of image galleries.

Individual image galleries include a description and thumbnails of the images in the gallery. Clicking on a thumbnail will display the full-sized image.

### Mission

The mission page briefly explains the scope of the church's charitable work, and provides a list of the church's supported missions. Clicking on a mission takes the user to that program's website if one is available.

### About

The about pages take the user on a guided pathway to learn more about the church, pointing the user towards an in-person visit and making contact.

The pages include:

- A welcoming video message from the pastor
- A listing of the church's leadership and administrative team along with individual bio pages for each
- A description of the church's history, beliefs, and community
- The United Church of Christ Statement of Faith

### Visit

The visit page describes regular Sunday worship services, provides the church's address, and integrates with Google Maps to provide a map of the church's location and surrounding area. A call to action encourages the user to contact the church about their upcoming visit.

### Contact

The contact page gives users a way to reach the church right from the website. A notification email is sent to a specified email address when a user submits the form. Additionally, a special page is displayed thanking the user for getting in touch.

### 404 Page

A custom 404 page displays when the user tries to access a page that doesn't exist on the website. A call-to-action button directs the user back to the homepage.

## Managing Content

What follows is a page-by-page, feature-by-feature walkthrough on how to manage content on the website.

### Footer

The footer information and URL links can be changed by modifying the appropriate values in the "Website Data" **JSON object** in Contentful. JSON is a strictly structured data type, and Contentful will alert you if something is not formatted properly. This data is used in many places across the site and as such you should edit this object cautiously, and only when you absolutely need to.

### Homepage

#### Alert Modal Window

The website has an alert feature to allow you to show visitors a message when they visit the homepage.

To use the alert, publish a **Message** in Contentful titled "Homepage Alert". The content of this **Message** will be displayed in the alert.

To remove the alert, either delete all content in "Homepage Alert", or unpublish it.

#### Background

There are three different options for the homepage background. They are listed here in order of precedence:

1. Video background
2. Image background
3. Solid blue background

If an option fails or is not provided, the background will fallback to the next option.

##### Video Background

To use the background video, publish a video **Media asset** in Contentful titled "Homepage Background Video". The video in this **Media asset** will play muted in the background.

##### Image Background

To use the background image, publish an image **Media Asset** in Contentful titled "Homepage Background Image". The image in this **Media Asset** will be displayed the background.

### Events

Events can be added by publishing a new **Event** in Contentful. The website will not list and create new event pages for events that are in the past. You can set the automatic removal of an event page by scheduling the Contentful **Event** to unpublish at a time after the event has occurred.

An event allows the addition of an image to represent the event, which may be any Contentful image **Media Asset**. You can choose an already existing image **Media asset** or add a new one while creating the **Event**.

Events will be listed in chronological order with the earliest event appearing first.

### Services

Past services can be added by publishing a new **Service** in Contentful.

A service requires a preacher, who may be any Contentful **Person**. You can choose an already existing **Person** or create a new one while creating the **Service**.

If you are using a YouTube video for the **Service** video URL, you should use this format: "https<nolink>://www.youtube.com/embed/\*\*\*video code here\*\*\*". This format enables an embedded YouTube video player with enhanced features, and the video may not play correctly without it.

### Images

An image gallery can be created by publishing a new **Image gallery** in Contentful. The image gallery requires one more more Contentful image **Media assets**. You can choose already existing image **Media assets** or create new ones while creating the **Image gallery**.

The first image **Media asset** will be used to represent the entire image gallery. You can click and drag the image **Media asset**s to change the order in which they appear.

### Missions

A mission can be created by publishing a new **Mission** in Contentful. The **Mission** accepts a Contentful image **Media asset** to represent it on the website. You can choose already existing image **Media asset** or create a new one while creating the **IMission**.

### Our team

You can click and drag each **Person** to change the order in which they appear.

### Pastor's message

The pastor's video welcome message can be changed by modifying the "pastorsWelcomeVideoUrl" value in the "Website Data" **JSON object** in Contentful. JSON is a strictly structured data type, and Contentful will alert you if something is not formatted properly. This data is used in many places across the site and as such you should edit this object cautiously, and only when you absolutely need to.

### Contact

#### Success Page

The background image can be changed by replacing the file of the "Contact Success Page Background Image" **Media asset** in Contentful.

### 404 Page

The background image can be changed by replacing the file of the "Error 404 Page Background Image" **Media asset** in Contentful.

## Integrated services

### Contentful

Contentful is the content management system of the website. When new content is published or old content is unpublished, an automated webhook signals Netlify to build the new content or remove the old content.

#### About content

There are two kinds of "content" in Contentful:

1. Content
2. Media

A piece of **Content** is a collection of different pieces of information that create something unique to the website. Examples would be people, events, image galleries, and services.

A piece of **Media** is an image file, a video file, or any other kind of art asset or document.

**Content** can be composed of **Media** and other **Content**.
**Media** stands on its own and cannot be composed of other **Media** or **Content**.

Two examples:

1. An image gallery (**Content**) is composed of one or more images (**Media**).
2. A service (**Content**) is composed of a person (**Content**) and optionally an image (**Media**).

There is something called the "Content model" that defines what "Content" looks like. Do not edit this unless you are absolutely certain that you know what you are doing, as the website depends on a consistent model.

#### Content limits

Contentful is a paid service, but it offers a generous amount of usage for free. It can be upgraded should additional features or greater content limits be needed.

### GitHub

GitHub is the host of the repository that holds the website's source code. When new changes are committed and pushed to the repository, an automated webhook signals Netlify to rebuild the website using the new source code.

### Google Maps

Google Maps is the platform that allows the website to create maps for event locations and other features on the website.

#### Rate limiting

Google Maps charges per use of their service, but allows a certain amount of usage for free. While it is unlikely to happen, it is highly recommended to use their rate limiting feature to avoid being billed for going over this limit.

### Netlify

Netlify is the platform that hosts and builds the website from the source code on GitHub, and handles the automatic deployment of new content when it is published on Contentful.

#### Contact form

Netlify handles contact form submissions and can be configured to send out email notifications when a form is submitted.

#### Environment variables and webhooks

Netlify contains sections for environment variables and webhooks that allow it to integrate with other services like Contentful and Google Maps. This information should always be kept private.
