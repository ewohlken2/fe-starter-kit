# fe-starter-kit
Front-end web development starter kit


# Breakdown of Directory Structure

## js
Vanilla Javascript, things that don't need view frameworks, houses our dom based components

### services
A service is mostly for communicating between components, or abstracting out shared logic. Usually a collection of utility functions with a little bit of state management sprinkled in

### utility
individually exported utility functions, try to keep the number of exported functions small and if it gets too large consider turning it into a service

#### components
components using a dynamically instantied using DOM attributes/properties. See [DOM Based Components](#DOM-Based-Components)

## React
React components and redux stores

## Scss
Styles + Icomoon stuff


# DOM Based Components
The idea is to have relatively low complexity components that are instantiated dynamically based on properties/attributes in the DOM. This allows us to add minor scripting to widgets designed with minor user interaction in mind. In order to assist with this, we have a pattern for vanilla js component creation which relies heavily on the DomComponent ES6 class. Some of the things this class does are:


## Notes: 
I prefer not to use classes because this separates JS logic from styling. The backbone of this pat