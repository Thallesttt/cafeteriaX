
const pulumi = require("@pulumi/pulumi");
const docker = require("@pulumi/docker");

const image = new docker.RemoteImage("ubuntu", {name:"ubuntu:latest"});
const OS = new docker.Container("cafeteriaX", {image: image.imageId});