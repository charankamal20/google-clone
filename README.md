# Google Search Clone in NextJs 14

A fully functional clone of the [Google Clone](https://google-with-next.vercel.app/) using Next.js 14, Tailwind CSS, and Google's Programmable Search Engine API for web search functionality.

## Overview

This project is a clone of the Google Search engine, built with modern web development technologies. It leverages Next.js for the frontend, Tailwind CSS for styling, and integrates with Google's Programmable Search Engine API to provide web search capabilities.

## Features

- **Google Search Interface:** Mimics the look and feel of the Google Search page.
- **Web Search:** Utilizes Google's Programmable Search Engine API to perform web searches.
- **Responsive Design:** Ensures a seamless experience across various devices and screen sizes.

## Technologies Used

- **Next.js 14:** A React framework for building modern web applications.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Google Programmable Search Engine API:** Enables web search functionality.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/charankamal20/google-clone.git
   
2. Install dependencies:


    ```bash
    cd google-search-clone
    npm install

3. Set up environment variables:

 - Rename the .env.local.example to '.env.local' file in the root directory and add the following:

    ```bash
    NEXT_PUBLIC_IP_API_KEY=your_extreme_ip_lookup_api_key
    GOOGLE_API_KEY=your_google_api_key
    CONTEXT_KEY=your_context_key

 - Replace your_google_api_key and your_context_key with your actual API key and context key.

4. Run the development server:

    ```bash
    npm run dev

Open http://localhost:3000 in your browser.

## Deployment

The project is deployed on Vercel. You can access the live version at https://google-with-next.vercel.app/.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.