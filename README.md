# NodeCollection
A Collection of Nodes.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of a project that implements a Tree structure.

## Technologies Used
Only plain, vanilla Typescript is used with no libraries or other packages.

## Features
* Add any number of *Node*s to the *NodeCollection*.
* The *NodeCollection*, once created,  is a *read-only* collection of *Node*s.
* Find the *item*, a *Node* at a specified *index*.
* Get the *size* of the *NodeCollection*, the number of *Node*s contained in the *NodeCollection*.

## Setup
Just import the NodeCollection class into your project.

## Usage
Create a *NodeCollection*. In this case, in the example below, we create a *NodeCollection* of the *number*s *1*, *2*, and *3*.
```
    const nodeColl: NodeCollection<number> = new NodeCollection(1, 2, 3);
```
Get an *item* at a specified *index*.
```
    const item = nodeColl.item(0);
```
In the example above, we get, as the returned *item*, the number *1*, which is the *item* in the *0*th position in the collection.

We can also obtain the *size* of the *NodeCollection*.
```
    const size = nodeColl.size;
```
In this example above, the *size* of the *NodeCollection* is *3*.
## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 
## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
