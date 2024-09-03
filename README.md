# ⚛️ React Remote Application - Microfrontend & Keycloak Integration

![React](https://img.shields.io/badge/React-v18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-Host-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Keycloak](https://img.shields.io/badge/Keycloak-Secured-00A0A0?style=for-the-badge&logo=keycloak&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-Module_Federation-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white)

Welcome to the **React Remote Application**! This project is part of a microfrontend architecture where it serves as a remote module that integrates seamlessly into an Angular host application. The app is secured by Keycloak for centralized authentication.

## 🎯 Overview

This repository is a remote application built with **React** that can be dynamically loaded into an Angular host application using **Webpack Module Federation**. The integration is secured with **Keycloak** to ensure robust authentication and authorization.

## 🛠️ Key Features

- **📦 Microfrontend Architecture**: Serve as a remote module to be integrated into the Angular host application.
- **🔐 Keycloak Authentication**: Centralized authentication with Keycloak, allowing secure access to the React components.
- **🔗 Module Federation**: Dynamically expose and load React components using Webpack Module Federation.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14+)
- **React** (v17+)
- **Keycloak** (v15+)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/react-remote-app.git
cd react-remote-app
npm install
