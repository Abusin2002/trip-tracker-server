# ProxiTrack

<p align="center">
  <strong>Real-Time Proximity & Location Tracking Platform</strong>
</p>

<p align="center">
  Discover nearby users, view real-time distance, and share location updates within a configurable radius.
</p>

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-000000?style=for-the-badge)
![Flutter](https://img.shields.io/badge/Flutter-Mobile-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps-SDK-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

---

## 📌 Overview

**ProxiTrack** is a real-time proximity tracking application designed to help users discover and interact with nearby friends or users based on a configurable geographic radius.

The application provides real-time visibility of:

- Nearby online users
- Distance between users
- Current location
- Online/offline availability
- Latest location update time
- Configurable search radius

The system combines **Flutter, Node.js, WebSocket, MySQL, and Google Maps SDK** to provide a responsive real-time location experience.

> **Privacy First:** ProxiTrack does not secretly monitor or track users. Location sharing is controlled by the user, and the application is designed to provide location information only within the intended user-sharing experience.

---

## ✨ Key Features

### 📍 Proximity-Based Discovery

Users can configure a search radius and discover other available users within that geographic area.

### ⚡ Real-Time Location Updates

WebSocket communication enables location and availability updates without repeatedly refreshing the application.

### 🗺️ Interactive Maps

Google Maps SDK provides map-based visualization of user locations and geographic distance.

### 👥 Online User Discovery

Users can see currently available users within their configured radius.

### 📏 Distance Calculation

The system calculates the geographic distance between users and displays the distance dynamically.

### ⏱️ Last Updated Status

Users can see when another user's location was last updated.

### 🔄 Dynamic Radius

Users can change their preferred search radius to control the geographic area used for nearby-user discovery.

---

# 🏗️ System Architecture

```text
                         ┌─────────────────────┐
                         │      Flutter App    │
                         │                     │
                         │  • User Interface   │
                         │  • Google Maps      │
                         │  • Location Service │
                         └──────────┬──────────┘
                                    │
                           REST API │
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     Node.js API     │
                         │                     │
                         │ • Authentication    │
                         │ • User Management   │
                         │ • Location Logic    │
                         │ • Radius Filtering  │
                         └──────────┬──────────┘
                                    │
                          ┌─────────┴─────────┐
                          │                   │
                          ▼                   ▼
                ┌─────────────────┐   ┌─────────────────┐
                │     MySQL       │   │    WebSocket    │
                │                 │   │                 │
                │ • Users         │   │ • Live Location │
                │ • Locations     │   │ • Online Status │
                │ • Tracking Data │   │ • Live Updates  │
                └─────────────────┘   └────────┬────────┘
                                                │
                                                │
                                                ▼
                                      ┌──────────────────┐
                                      │ Nearby Users     │
                                      │ Real-Time Update │
                                      └──────────────────┘
