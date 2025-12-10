<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="barbershop.png" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# BARBERSHOP

<em>Elevate Your Style, Experience Premium Grooming Today</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/Kyl67899/barbershop?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Kyl67899/barbershop?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Kyl67899/barbershop?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Resend-000000.svg?style=flat&logo=Resend&logoColor=white" alt="Resend">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/Firebase-DD2C00.svg?style=flat&logo=Firebase&logoColor=white" alt="Firebase">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<br>
<img src="https://img.shields.io/badge/Leaflet-199900.svg?style=flat&logo=Leaflet&logoColor=white" alt="Leaflet">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=flat&logo=Zod&logoColor=white" alt="Zod">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/datefns-770C56.svg?style=flat&logo=date-fns&logoColor=white" alt="datefns">

</div>
<br>

---

## Table of Contents

- [BARBERSHOP](#barbershop)
	- [Table of Contents](#table-of-contents)
	- [Overview](#overview)
	- [Project Structure](#project-structure)
		- [Project Index](#project-index)
	- [Getting Started](#getting-started)
		- [Prerequisites](#prerequisites)
		- [Installation](#installation)
		- [Usage](#usage)
		- [Testing](#testing)
	- [Contributing](#contributing)
- [how to update all packages](#how-to-update-all-packages)
- [npm i -g npm-check-updates](#npm-i--g-npm-check-updates)
- [ncu -u](#ncu--u)
- [npm install](#npm-install)
---

## Overview

Barbershop is a modern web application framework designed to elevate the user experience for premium grooming services.

**Why Barbershop?**

This project combines performance, security, and user engagement to create a seamless web experience. The core features include:

- 🎨 **Tailwind CSS Integration:** Streamlined styling for rapid UI development, reducing design time.
- 🔒 **Performance and Security Enhancements:** Optimized Next.js configuration to safeguard against vulnerabilities.
- 📦 **TypeScript Support:** Strong typing for improved code quality and maintainability.
- 🤖 **Dynamic Components:** Engaging elements like booking forms and chatbots enhance user interaction.
- 🔥 **Robust Backend Integration:** Firebase setup simplifies data management and analytics.
- 🌟 **User-Centric Design:** Intuitive navigation and interaction ensure a delightful user experience.

---

## Project Structure

```sh
└── barbershop/
    ├── README.md
    ├── app
    │   ├── about
    │   ├── booking
    │   ├── contact
    │   ├── gallery
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── services
    │   └── testimonials
    ├── components
    │   ├── about.tsx
    │   ├── book-form.tsx
    │   ├── book-wrapper.tsx
    │   ├── booking.tsx
    │   ├── chat-quick-actions.tsx
    │   ├── contact-forms.tsx
    │   ├── contact-wrapper.tsx
    │   ├── contact.tsx
    │   ├── elite-chatbot.tsx
    │   ├── footer.tsx
    │   ├── gallery.tsx
    │   ├── hero.tsx
    │   ├── map.tsx
    │   ├── navbar.tsx
    │   ├── service-inquiry-form-wrapper.tsx
    │   ├── service-inquiry-form.tsx
    │   ├── service-page-client.tsx
    │   ├── services.tsx
    │   ├── testimonials.tsx
    │   └── ui
    ├── components.json
    ├── eslint.config.mjs
    ├── firebase.js
    ├── hooks
    │   └── use-toast.ts
    ├── lib
    │   ├── actions.ts
    │   ├── ai-chat.ts
    │   ├── appointment-actions.ts
    │   ├── chatbot-actions.ts
    │   ├── reviews.ts
    │   ├── service-actions.ts
    │   └── utils.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   └── images
    ├── tailwind.config.js
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── leaflet.d.ts
```

---

### Project Index

<details open>
	<summary><b><code>BARBERSHOP/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/next.config.ts'>next.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures the Next.js application to enhance performance and security by enabling Reacts strict mode<br>- It also specifies a list of approved image domains, ensuring that only images from trusted sources are loaded, which helps maintain the integrity and reliability of the visual content within the project<br>- This setup is essential for optimizing user experience and safeguarding against potential vulnerabilities.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the configuration and dependencies for the barbershop-website project, facilitating the development and deployment of a modern web application<br>- It establishes essential scripts for development, building, and linting, while integrating various libraries and tools that enhance functionality, user interface, and analytics<br>- This foundational setup supports a seamless user experience and efficient project management within the overall architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configures PostCSS to utilize Tailwind CSS as a plugin, enabling the application to leverage Tailwinds utility-first CSS framework<br>- This integration enhances the styling capabilities of the project, promoting a streamlined and efficient approach to building responsive and modern user interfaces<br>- The setup aligns with the overall architecture by ensuring consistent styling practices across the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Configures TypeScript compiler options for a project utilizing modern JavaScript features and React<br>- Ensures compatibility with various libraries and frameworks while enforcing strict type-checking and module resolution<br>- Facilitates seamless integration with Next.js, enhancing development efficiency and maintaining code quality across TypeScript and JavaScript files within the codebase<br>- Supports incremental builds and custom path mappings for improved project organization.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
					<td style='padding: 8px;'>- Configures Tailwind CSS for a project, enabling dark mode support and defining content sources for styling<br>- Establishes a responsive design with a centered container and customizable padding, while extending the theme with a comprehensive color palette and border radius options<br>- Incorporates animations for UI elements, enhancing user experience through smooth transitions, and integrates plugins for additional functionality.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/firebase.js'>firebase.js</a></b></td>
					<td style='padding: 8px;'>- Initialize Firebase services to enable backend functionality for the application<br>- By configuring the Firebase SDK, the setup facilitates essential features such as analytics tracking and data management, which are crucial for enhancing user engagement and monitoring application performance<br>- This integration supports the overall architecture by providing a robust foundation for scalable web app development within the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
					<td style='padding: 8px;'>- Configures Tailwind CSS for a project, enabling dark mode support and defining a comprehensive color palette that enhances the visual consistency across various components and pages<br>- It extends the default theme with custom colors and border radius settings, ensuring a cohesive design language<br>- Additionally, it integrates animation capabilities through a dedicated plugin, contributing to a dynamic user experience within the overall codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configures ESLint for a project utilizing Next.js and TypeScript, ensuring adherence to best practices and core web vitals<br>- By leveraging the FlatCompat utility, it simplifies the integration of ESLint configurations, promoting consistency and maintainability across the codebase<br>- This setup enhances code quality and developer experience, aligning with the overall architectures focus on robust and scalable web applications.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components.json'>components.json</a></b></td>
					<td style='padding: 8px;'>- Defines the configuration for a component-based architecture, establishing essential parameters such as styling, resource handling, and aliasing for various project directories<br>- It integrates Tailwind CSS for styling and specifies an icon library, facilitating a cohesive design system<br>- This setup enhances modularity and maintainability across the codebase, streamlining the development process and promoting consistency in UI components.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- types Submodule -->
	<details>
		<summary><b>types</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ types</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/types/leaflet.d.ts'>leaflet.d.ts</a></b></td>
					<td style='padding: 8px;'>- Enhances TypeScript support for the Leaflet library by declaring a module that re-exports all Leaflet types, ensuring seamless integration within the codebase<br>- Additionally, it provides a declaration for CSS modules, allowing for the import of CSS files as modules<br>- This setup facilitates type safety and improves the development experience when working with Leaflet and associated styles in the project.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- components Submodule -->
	<details>
		<summary><b>components</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ components</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/gallery.tsx'>gallery.tsx</a></b></td>
					<td style='padding: 8px;'>- Gallery component showcases a curated selection of images that represent the quality and experience offered by the project<br>- It serves as a visual portfolio, enhancing user engagement by allowing visitors to explore various styles and services<br>- Positioned within the overall architecture, it contributes to the aesthetic appeal and user experience of the application, reinforcing the brands identity and offerings.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/navbar.tsx'>navbar.tsx</a></b></td>
					<td style='padding: 8px;'>- Navbar component enhances user navigation by providing a responsive and interactive interface for the Elite Cuts website<br>- It features a dynamic menu that adapts to scrolling behavior and route changes, ensuring a seamless experience across devices<br>- Users can easily access various sections, including services and booking options, promoting engagement and facilitating quick navigation throughout the site.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/contact-forms.tsx'>contact-forms.tsx</a></b></td>
					<td style='padding: 8px;'>- ContactForm component facilitates user communication by providing a structured interface for submitting inquiries<br>- It captures essential information such as name, email, subject, and message, while also allowing pre-filling from URL parameters<br>- Upon submission, it handles form validation, sends the data to the server, and displays success or error notifications, enhancing user engagement and support within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/services.tsx'>services.tsx</a></b></td>
					<td style='padding: 8px;'>- Showcases a selection of premium grooming services offered by the business, highlighting key details such as service titles, descriptions, prices, and durations<br>- Each service is visually represented with an icon and linked to a dedicated page for more information<br>- This component enhances user engagement by providing an attractive overview of available services, encouraging potential clients to explore and book appointments.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/elite-chatbot.tsx'>elite-chatbot.tsx</a></b></td>
					<td style='padding: 8px;'>Users can send messages and receive responses from the chatbot, creating a dynamic conversation flow.-<strong>AI IntegrationThe component utilizes AI capabilities to generate contextually relevant responses and validate user data.-</strong>User-Centric DesignWith a focus on usability, the chatbot is designed to be intuitive and accessible, encouraging user interaction.In summary, the <code>EliteChatbot</code> component is a vital part of the codebase that enhances user interaction through an AI-powered virtual assistant, making it easier for users to get help and information quickly.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/book-wrapper.tsx'>book-wrapper.tsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates the dynamic rendering of the booking form within the application, ensuring that it loads client-side without server-side rendering<br>- By incorporating a loading state, it enhances user experience during the forms initialization<br>- This component plays a crucial role in the overall architecture by seamlessly integrating the booking functionality into the user interface, promoting a responsive and interactive experience for users.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/booking.tsx'>booking.tsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates the dynamic rendering of a booking form within the application, ensuring that it loads client-side without server-side rendering<br>- This approach enhances user experience by providing a seamless and responsive interface for booking interactions, while also managing loading states effectively<br>- It plays a crucial role in the overall architecture by integrating user input functionality into the broader components of the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/testimonials.tsx'>testimonials.tsx</a></b></td>
					<td style='padding: 8px;'>- Showcases client testimonials to enhance user trust and engagement on the Elite Cuts platform<br>- By fetching and displaying featured testimonials, it provides potential customers with insights into the experiences of previous clients<br>- The component handles loading states gracefully, ensuring a smooth user experience while presenting a visually appealing layout that highlights client feedback effectively.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/contact.tsx'>contact.tsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates the rendering of a contact form within the application by utilizing Reacts Suspense feature<br>- It enhances user experience by displaying a loading message while the contact form is being prepared<br>- This component serves as a crucial part of the overall architecture, ensuring that users can seamlessly access the contact functionality without interruptions during data fetching.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/book-form.tsx'>book-form.tsx</a></b></td>
					<td style='padding: 8px;'>- BookingForm component facilitates the scheduling of appointments by embedding a JotForm within a responsive iframe<br>- It pre-fills the form with user-provided data from URL parameters, enhancing user experience<br>- Additionally, it dynamically adjusts the iframe size for optimal display and provides feedback to users when their information is successfully loaded, ensuring a seamless interaction for booking services.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/about.tsx'>about.tsx</a></b></td>
					<td style='padding: 8px;'>- Showcases the About section for the Elite Cuts website, highlighting the brand's identity and values<br>- It presents a visually appealing layout that combines imagery with informative text, emphasizing the salon's experience, services, and commitment to quality<br>- This component enhances user engagement by inviting visitors to learn more about the grooming services offered, thereby contributing to the overall user experience and narrative of the website.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/hero.tsx'>hero.tsx</a></b></td>
					<td style='padding: 8px;'>- Hero component serves as a visually striking introduction to the Elite Cuts premium barbershop, encapsulating its brand identity and inviting users to engage<br>- Featuring a captivating background image and compelling text, it highlights the barbershops services and expertise<br>- The component also provides clear call-to-action buttons for booking appointments and exploring services, enhancing user experience and navigation within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/service-inquiry-form.tsx'>service-inquiry-form.tsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates the dynamic loading of the service inquiry form component without server-side rendering, enhancing user experience by providing a loading state during the forms initialization<br>- This wrapper component integrates seamlessly into the overall architecture, allowing for the passing of service-specific data, thereby streamlining the inquiry process for users engaging with various services offered in the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/service-inquiry-form-wrapper.tsx'>service-inquiry-form-wrapper.tsx</a></b></td>
					<td style='padding: 8px;'>- ServiceInquiryForm facilitates user inquiries about specific services by embedding a JotForm within a responsive card component<br>- It dynamically constructs the form URL based on optional prefill parameters from the URL, enhancing user experience<br>- The component also ensures the JotForm script is loaded efficiently, allowing for seamless interaction and data collection, thereby integrating smoothly into the overall project architecture focused on user engagement and service inquiries.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/map.tsx'>map.tsx</a></b></td>
					<td style='padding: 8px;'>- Map component facilitates the integration of an interactive map within the application, allowing users to visualize specific locations based on provided latitude and longitude coordinates<br>- It generates an embedded OpenStreetMap iframe, offering a customizable zoom level and height<br>- Additionally, it includes a link for users to view the map in a larger format, enhancing user experience and accessibility to location details.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/service-page-client.tsx'>service-page-client.tsx</a></b></td>
					<td style='padding: 8px;'>- ServicePageClient component serves as a dynamic interface for displaying detailed information about a specific service, including its description, pricing, and benefits<br>- It enhances user engagement by integrating a service inquiry form that loads seamlessly on the client side<br>- This component is essential for providing users with a comprehensive overview of services offered, facilitating inquiries, and ultimately driving customer interaction within the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/chat-quick-actions.tsx'>chat-quick-actions.tsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates user interaction within the chat interface by providing a set of quick action buttons<br>- These buttons enable users to easily initiate common inquiries, such as booking appointments, requesting service information, checking business hours, and accessing contact details<br>- This component enhances the overall user experience by streamlining communication and making essential actions readily accessible.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/footer.tsx'>footer.tsx</a></b></td>
					<td style='padding: 8px;'>- Provides a visually appealing and informative footer for the Elite Cuts website, enhancing user experience by offering essential information such as company details, quick links to various sections, a list of services, and operating hours<br>- Additionally, it integrates social media links to foster community engagement, ensuring visitors have easy access to important resources and contact points while navigating the site.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/contact-wrapper.tsx'>contact-wrapper.tsx</a></b></td>
					<td style='padding: 8px;'>- Facilitates the dynamic loading of a contact form component within a Next.js application, ensuring that server-side rendering is disabled for improved performance<br>- By providing a loading state, it enhances user experience during the forms initialization<br>- This component plays a crucial role in the overall architecture by streamlining user interactions with the contact functionality of the project.</td>
				</tr>
			</table>
			<!-- ui Submodule -->
			<details>
				<summary><b>ui</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ components.ui</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/button.tsx'>button.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a versatile button component designed for use within a React application<br>- It supports multiple visual styles and sizes, enhancing the user interface with consistent design and behavior<br>- By leveraging variant props, it allows for easy customization while maintaining accessibility and responsiveness, contributing to a cohesive and user-friendly experience across the entire codebase architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/label.tsx'>label.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a customizable Label component that enhances user interface elements within the project<br>- By leveraging Radix UIs label functionality and integrating variant styles, it ensures consistent design and accessibility across the application<br>- This component plays a crucial role in maintaining a cohesive user experience, allowing developers to easily implement labels with tailored styles throughout the codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/tabs.tsx'>tabs.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a set of customizable tab components that enhance user interface interactions within the application<br>- By leveraging Radix UIs tab primitives, it facilitates the creation of accessible and visually appealing tabbed navigation<br>- These components streamline the organization of content, allowing users to switch between different views seamlessly, thereby improving overall user experience and engagement within the codebase architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/use-toast.ts'>use-toast.ts</a></b></td>
							<td style='padding: 8px;'>- Provides a customizable toast notification system that enhances user experience by displaying brief messages<br>- It manages the lifecycle of notifications, allowing for addition, updating, dismissal, and removal of toasts while maintaining a limit on the number of active notifications<br>- This functionality integrates seamlessly into the broader application architecture, ensuring consistent and user-friendly feedback throughout the interface.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/textarea.tsx'>textarea.tsx</a></b></td>
							<td style='padding: 8px;'>- Textarea component enhances user interaction by providing a customizable and accessible text input area within the UI<br>- It integrates seamlessly into the overall project architecture, allowing developers to maintain consistent styling and behavior across various forms<br>- By leveraging Reacts forwardRef, it ensures proper ref forwarding, promoting better integration with other components and improving usability in diverse contexts.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/popover.tsx'>popover.tsx</a></b></td>
							<td style='padding: 8px;'>- Popover components enhance user interaction by providing contextual information in a visually appealing manner<br>- They facilitate the display of additional content when triggered, ensuring a seamless experience within the UI<br>- By leveraging Radix UIs popover primitives, these components maintain accessibility and responsiveness, contributing to a cohesive design system that elevates the overall functionality and usability of the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/input.tsx'>input.tsx</a></b></td>
							<td style='padding: 8px;'>- Input component serves as a customizable and reusable UI element within the project, designed to enhance user interaction with forms<br>- By providing a consistent styling and behavior for input fields, it integrates seamlessly into the overall architecture, promoting a cohesive user experience<br>- This component leverages utility functions for styling, ensuring adaptability across various contexts while maintaining accessibility and responsiveness.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/toaster.tsx'>toaster.tsx</a></b></td>
							<td style='padding: 8px;'>- Toaster component enhances user experience by providing a dynamic toast notification system within the application<br>- It utilizes a toast context to manage and display notifications, allowing for customizable titles, descriptions, and actions<br>- Integrated within the broader UI architecture, it ensures that users receive timely feedback and updates, contributing to a more interactive and responsive interface.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/avatar.tsx'>avatar.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a set of customizable avatar components that enhance user interface consistency and visual appeal within the application<br>- By leveraging Radix UIs avatar primitives, it enables the creation of user profile images with fallback options, ensuring a seamless experience regardless of image availability<br>- These components integrate smoothly into the broader codebase, promoting reusability and adherence to design standards.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/card.tsx'>card.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a set of reusable React components for creating customizable card elements within the user interface<br>- These components, including Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter, facilitate the structured presentation of content, enhancing the overall visual appeal and user experience of the application<br>- They integrate seamlessly into the broader project architecture, promoting consistency and modularity in design.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/alert.tsx'>alert.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a flexible alert component for user notifications within the UI framework<br>- It supports various visual styles through variant props, allowing for customization based on context, such as default or destructive alerts<br>- Accompanied by dedicated subcomponents for titles and descriptions, it enhances the user experience by delivering clear and accessible messaging throughout the application.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/components/ui/toast.tsx'>toast.tsx</a></b></td>
							<td style='padding: 8px;'>- Provides a customizable toast notification system that enhances user experience by delivering timely feedback and alerts within the application<br>- It integrates seamlessly with the overall codebase architecture, allowing developers to easily implement and manage toast notifications with various styles and actions<br>- This component promotes a consistent and visually appealing way to communicate important messages to users.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- hooks Submodule -->
	<details>
		<summary><b>hooks</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ hooks</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/hooks/use-toast.ts'>use-toast.ts</a></b></td>
					<td style='padding: 8px;'>- Provides a customizable toast notification system for the application, enabling users to display brief messages and alerts<br>- It manages the lifecycle of notifications, including adding, updating, dismissing, and removing them, while ensuring a limit on concurrent toasts<br>- This functionality enhances user experience by delivering timely feedback and information in a visually appealing manner, seamlessly integrating with the overall project architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- app Submodule -->
	<details>
		<summary><b>app</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ app</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
					<td style='padding: 8px;'>- RootLayout serves as the foundational structure for the Elite Cuts web application, establishing a cohesive layout that integrates essential components such as the Navbar, Footer, and Toaster<br>- It enhances user experience by incorporating analytics and ensuring responsive design, while also defining metadata for SEO<br>- This layout encapsulates the overall aesthetic and functional essence of the premium barbershop, facilitating seamless navigation and interaction throughout the site.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/page.tsx'>page.tsx</a></b></td>
					<td style='padding: 8px;'>- Defines the main entry point for the Elite Cuts Barbershop website, showcasing essential components that enhance user experience<br>- It integrates sections such as Hero, Services, About, Gallery, Testimonials, Booking, and Contact, creating a cohesive layout that promotes premium grooming services<br>- The metadata establishes the sites title and description, ensuring effective branding and search engine optimization.</td>
				</tr>
			</table>
			<!-- testimonials Submodule -->
			<details>
				<summary><b>testimonials</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.testimonials</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/testimonials/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Showcases client testimonials for Elite Cuts Barbershop, enhancing user engagement by presenting authentic feedback<br>- It retrieves testimonials from a backend service and displays them in a visually appealing card format, complete with client images and ratings<br>- This component contributes to the overall architecture by fostering trust and credibility, encouraging potential customers to explore more about the services offered.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- booking Submodule -->
			<details>
				<summary><b>booking</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.booking</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/booking/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Facilitates the booking process for appointments at Elite Cuts Barbershop by providing a user-friendly interface<br>- It allows customers to select their preferred date, time, and service while ensuring a seamless experience through a loading state<br>- The page enhances user engagement with a visually appealing layout and clear messaging, contributing to the overall functionality of the application within the project architecture.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- about Submodule -->
			<details>
				<summary><b>about</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.about</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/about/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Showcases the About Us page for Elite Cuts Barbershop, providing visitors with insights into the barbershops history, values, and expert team<br>- It emphasizes the commitment to excellence and community, while introducing the skilled professionals who deliver top-notch services<br>- The page aims to create a welcoming experience that reflects the barbershops dedication to quality and customer satisfaction.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- services Submodule -->
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.services</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Showcases the range of premium grooming services offered by Elite Cuts Barbershop, providing potential clients with detailed descriptions, pricing, and duration for each service<br>- It enhances user engagement through a visually appealing layout and encourages bookings by linking to service details and contact options<br>- This component plays a crucial role in the overall architecture by integrating service information into the user experience seamlessly.</td>
						</tr>
					</table>
					<!-- hair-styling Submodule -->
					<details>
						<summary><b>hair-styling</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.hair-styling</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/hair-styling/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the presentation of the Hair Styling service at Elite Cuts Barbershop, showcasing essential details such as service description, pricing, duration, and included features<br>- Enhances user experience by providing a visually appealing interface that highlights the benefits of professional hair styling, ultimately aiming to attract customers seeking quality styling services for various occasions.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- hair-coloring Submodule -->
					<details>
						<summary><b>hair-coloring</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.hair-coloring</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/hair-coloring/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the rendering of the Hair Coloring service page for Elite Cuts Barbershop, showcasing professional hair coloring offerings<br>- It provides essential service details, including descriptions, pricing, duration, and included features, while emphasizing the expertise and quality of the barbershops services<br>- This component enhances user engagement by presenting a visually appealing and informative interface tailored for potential clients seeking hair coloring solutions.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- hot-towel-shave Submodule -->
					<details>
						<summary><b>hot-towel-shave</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.hot-towel-shave</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/hot-towel-shave/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the presentation of the Hot Towel Shave service at Elite Cuts Barbershop, showcasing essential details such as service description, pricing, duration, and included features<br>- Enhances user experience by providing a visually appealing and informative service page that highlights the luxurious aspects of the shave, promoting relaxation and self-care while emphasizing the expertise of the barbers.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- [service] Submodule -->
					<details>
						<summary><b>[service]</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.[service]</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/[service]/layout.tsx'>layout.tsx</a></b></td>
									<td style='padding: 8px;'>- ServiceLayout component provides a structured layout for displaying detailed information about barbershop services within the Elite Cuts Barbershop application<br>- It enhances user experience by facilitating navigation back to the services overview and encouraging appointment bookings through a prominent call-to-action<br>- The integration of metadata ensures that the page is well-defined for search engines, contributing to overall visibility and user engagement.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- kids-haircut Submodule -->
					<details>
						<summary><b>kids-haircut</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.kids-haircut</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/kids-haircut/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the presentation of the Kids Haircut service at Elite Cuts Barbershop, showcasing essential details such as service description, pricing, duration, and included features<br>- It aims to create an engaging and informative experience for parents seeking child-friendly haircut options, emphasizing a positive atmosphere and skilled barbers to ensure comfort and satisfaction for both children and their guardians.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- beard-trim Submodule -->
					<details>
						<summary><b>beard-trim</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.beard-trim</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/beard-trim/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the presentation of the Beard Trim service at Elite Cuts Barbershop by defining essential metadata and rendering a detailed service page<br>- It showcases the services features, benefits, and pricing, enhancing user engagement and providing potential clients with comprehensive information about beard trimming options<br>- This component integrates seamlessly into the overall architecture, contributing to a user-friendly experience within the barbershops service offerings.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- haircut Submodule -->
					<details>
						<summary><b>haircut</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.services.haircut</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/services/haircut/page.tsx'>page.tsx</a></b></td>
									<td style='padding: 8px;'>- Facilitates the rendering of the Haircut service page within the Elite Cuts Barbershop application<br>- It showcases essential service details, including pricing, duration, and included features, while emphasizing the barbershops commitment to quality and customer satisfaction<br>- This component enhances user experience by providing a visually appealing and informative interface for potential clients seeking premium haircut services.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<!-- contact Submodule -->
			<details>
				<summary><b>contact</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.contact</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/contact/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- Facilitates the creation of a dedicated contact page for the Elite Cuts Barbershop website, enhancing user engagement by providing essential information such as location and hours<br>- The page features a visually appealing layout that invites visitors to reach out with inquiries, while integrating a contact component to streamline communication<br>- This contributes to the overall user experience and accessibility of the barbershops services.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- gallery Submodule -->
			<details>
				<summary><b>gallery</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.gallery</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/app/gallery/page.tsx'>page.tsx</a></b></td>
							<td style='padding: 8px;'>- GalleryPage serves as a dynamic showcase for Elite Cuts Barbershop, allowing users to explore a curated collection of haircuts, beard trims, and styling work<br>- By utilizing a tabbed interface, it enhances user experience, enabling easy navigation through different categories of images<br>- The page aims to highlight the barbershops expertise and portfolio, inviting potential clients to engage with their services visually.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- lib Submodule -->
	<details>
		<summary><b>lib</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ lib</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/appointment-actions.ts'>appointment-actions.ts</a></b></td>
					<td style='padding: 8px;'>- BookAppointment function facilitates the scheduling of appointments by validating user input, generating a unique appointment ID, and sending confirmation emails to both clients and the barbershop<br>- It ensures data integrity through validation and error handling, while also managing communication effectively<br>- This component plays a crucial role in the overall architecture by streamlining the appointment booking process and enhancing user experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/actions.ts'>actions.ts</a></b></td>
					<td style='padding: 8px;'>- Facilitates the handling of contact form submissions and newsletter subscriptions for the Elite Cuts platform<br>- It validates user input, sends confirmation emails to clients, and notifies the barbershop of new submissions<br>- This functionality enhances user engagement and communication, ensuring that inquiries and subscriptions are efficiently managed within the overall architecture of the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/service-actions.ts'>service-actions.ts</a></b></td>
					<td style='padding: 8px;'>- Facilitates the submission of service inquiries for a barbershop by validating user input and sending confirmation emails to clients and notifications to the barbershop<br>- It ensures that inquiries are properly formatted and provides a seamless communication channel, enhancing customer engagement and operational efficiency within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/utils.ts'>utils.ts</a></b></td>
					<td style='padding: 8px;'>- Utility function enhances class name management by merging and optimizing Tailwind CSS classes<br>- It leverages the clsx library for conditional class handling and integrates with tailwind-merge to eliminate duplicates, ensuring a clean and efficient output<br>- This contributes to a streamlined styling process within the project, promoting consistency and reducing potential conflicts in class application across the codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/reviews.ts'>reviews.ts</a></b></td>
					<td style='padding: 8px;'>- Testimonials serve to showcase customer experiences and feedback for the Elite Cuts barbershop, enhancing its credibility and appeal<br>- By providing a collection of reviews, along with functions to retrieve all testimonials, featured testimonials, or specific ones by ID, this component plays a crucial role in promoting customer satisfaction and engagement within the overall project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/chatbot-actions.ts'>chatbot-actions.ts</a></b></td>
					<td style='padding: 8px;'>- Facilitates the interaction between a chatbot and JotForm by preparing form data for submission, managing the chatbots state through cookies, and ensuring state persistence across user sessions<br>- It enables saving, retrieving, and clearing the chatbots state, enhancing user experience by maintaining context during interactions<br>- This functionality is integral to the overall architecture, supporting seamless communication and data handling within the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/Kyl67899/barbershop/blob/master/lib/ai-chat.ts'>ai-chat.ts</a></b></td>
					<td style='padding: 8px;'>- AI Chat Module## OverviewThe <code>lib/ai-chat.ts</code> file is a crucial component of the project, designed to facilitate the validation of user input data for booking and contact forms<br>- It defines two primary data types—<code>BookingData</code> and <code>JotFormData</code>—which encapsulate the necessary fields for service bookings and general inquiries, respectively<br>- ## PurposeThe main purpose of this module is to ensure that the data collected from users is complete and valid before further processing<br>- It provides functions to check for any missing fields in both booking and JotForm data submissions<br>- By validating this information, the module helps maintain data integrity and enhances the user experience by prompting users to fill in all required information.## Use in Codebase ArchitectureThis file plays a pivotal role in the overall architecture of the project by acting as a gatekeeper for user input<br>- It ensures that only complete and valid data is passed on to subsequent components of the application, thereby reducing errors and improving the efficiency of the system<br>- The validation functions serve as a foundation for any features that rely on user input, making it an essential part of the user interaction flow within the application.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build barbershop from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Kyl67899/barbershop
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd barbershop
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Barbershop uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## Contributing

- **💬 [Join the Discussions](https://github.com/Kyl67899/barbershop/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Kyl67899/barbershop/issues)**: Submit bugs found or log feature requests for the `barbershop` project.
- **💡 [Submit Pull Requests](https://github.com/Kyl67899/barbershop/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Kyl67899/barbershop
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Kyl67899/barbershop/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Kyl67899/barbershop">
   </a>
</p>
</details>

---

<div align="left"><a href="#top">⬆ Return</a></div>

---

# how to update all packages
# npm i -g npm-check-updates
# ncu -u
# npm install