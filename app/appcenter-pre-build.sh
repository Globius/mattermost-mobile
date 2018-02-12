#!/usr/bin/env bash
echo PreScript Start
cat /etc/*-release
ip addr
uname -a
hostname
cat /etc/passwd
echo Ok, heres the real part of the script
pwd
pwd > $MMBuildDir
cd ..
make pre-run
