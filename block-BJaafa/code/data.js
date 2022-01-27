let  data = [
 
    {
        "commandName": "adduser/addgroup Command",
        "commandDescription": "The adduser and addgroup commands are used to add a user and group to the system respectively according to the default configuration specified in /etc/adduser.conf file."
    },
    {
        "commandName": "agetty Command",
        "commandDescription": "agetty is a program which manages physical or virtual terminals and is invoked by init. Once it detects a connection, it opens a tty port, asks for a user’s login name and calls up the /bin/login command. Agetty is a substitute of Linux getty:"
    },
    {
        "commandName": "alias Command",
        "commandDescription": "alias is a useful shell built-in command for creating aliases (shortcut) to a Linux command on a system. It is helpful for creating new/custom commands from existing Shell/Linux commands (including options):"
    },
    {
        "commandName": "anacron Command",
        "commandDescription": "anacron is a Linux facility used to run commands periodically with a frequency defined in days, weeks and months."
    },
    {
        "commandName": "apropos Command",
        "commandDescription": "apropos command is used to search and display a short man page description of a command/program as follows."
    },
    {
        "commandName": "apt Command",
        "commandDescription": "apt tool is a relatively new higher-level package manager for Debian/Ubuntu systems:"
    },
    {
        "commandName": "apt-get Command",
        "commandDescription": "apt-get is a powerful and free front-end package manager for Debian/Ubuntu systems. It is used to install new software packages, remove available software packages, upgrade existing software packages as well as upgrade entire operating system."
    },
    {
        "commandName": "aptitude Command",
        "commandDescription": "aptitude is a powerful text-based interface to the Debian GNU/Linux package management system. Like apt-get and apt; it can be used to install, remove or upgrade software packages on a system."
    },
    {
        "commandName": "arch Command",
        "commandDescription": "arch is a simple command for displaying machine architecture or hardware name (similar to uname -m):"
    },
    {
        "commandName": "arp Command",
        "commandDescription": "ARP (Address Resolution Protocol) is a protocol that maps IP network addresses of a network neighbor with the hardware (MAC) addresses in an IPv4 network."
    },
    {
        "commandName": "at Command",
        "commandDescription": "at command is used to schedule tasks to run in a future time. It’s an alternative to cron and anacron, however, it runs a task once at a given future time without editing any config files:"
    },
    {
        "commandName": "atq Command",
        "commandDescription": "atq command is used to view jobs in at command queue:"
    },
    {
        "commandName": "atrm Command",
        "commandDescription": "atrm command is used to remove/deletes jobs (identified by their job number) from at command queue:"
    },
    {
        "commandName": "awk Command",
        "commandDescription": "Awk is a powerful programming language created for text processing and generally used as a data extraction and reporting tool."
    },
    {
        "commandName": "batch Command",
        "commandDescription": "batch is also used to schedule tasks to run a future time, similar to the at command."
    },
    {
        "commandName": "basename Command",
        "commandDescription": "basename command helps to print the name of a file stripping of directories in the absolute path:"
    },
    {
        "commandName": "bc Command",
        "commandDescription": "bc is a simple yet powerful and arbitrary precision CLI calculator language which can be used like this:"
    },
    {
        "commandName": "bg Command",
        "commandDescription": "bg is a command used to send a process to the background."
    },
    {
        "commandName": "bzip2 Command",
        "commandDescription": "bzip2 command is used to compress or decompress file(s)."
    },
    {
        "commandName": "cal Command",
        "commandDescription": "The cal command print a calendar on the standard output."
    },
    {
        "commandName": "cat Command",
        "commandDescription": "cat command is used to view contents of a file or concatenate files, or data provided on standard input, and display it on the standard output."
    },
    {
        "commandName": "chgrp Command",
        "commandDescription": "chgrp command is used to change the group ownership of a file. Provide the new group name as its first argument and the name of file as the second argument like this:"
    },
    {
        "commandName": "chmod Command",
        "commandDescription": "chmod command is used to change/update file access permissions like this."
    },
    {
        "commandName": "chown Command",
        "commandDescription": "chown command changes/updates the user and group ownership of a file/directory like this."
    },
    {
        "commandName": "cksum Command",
        "commandDescription": "cksum command is used to display the CRC checksum and byte count of an input file."
    },
    {
        "commandName": "clear Command",
        "commandDescription": "clear command lets you clear the terminal screen, simply type."
    },
    {
        "commandName": "cmp Command",
        "commandDescription": "cmp performs a byte-by-byte comparison of two files like this."
    },
    {
        "commandName": "comm Command",
        "commandDescription": "comm command is used to compare two sorted files line-by-line as shown below."
    },
    {
        "commandName": "cp Command",
        "commandDescription": "cp command is used for copying files and directories from one location to another."
    },
    {
        "commandName": "date Command",
        "commandDescription": "date command displays/sets the system date and time like this."
    },
    {
        "commandName": "dd Command",
        "commandDescription": "dd command is used for copying files, converting and formatting according to flags provided on the command line. It can strip headers, extracting parts of binary files and so on."
    },
    {
        "commandName": "df Command",
        "commandDescription": "df command is used to show file system disk space usage as follows."
    },
    {
        "commandName": "diff Command",
        "commandDescription": "diff command is used to compare two files line by line. It can also be used to find the difference between two directories in Linux like this:"
    },
    {
        "commandName": "dir Command",
        "commandDescription": "dir command works like Linux ls command, it lists the contents of a directory."
    },
    {
        "commandName": "dmidecode Command",
        "commandDescription": "dmidecode command is a tool for retrieving hardware information of any Linux system. It dumps a computer’s DMI (a.k.a SMBIOS) table contents in a human-readable format for easy retrieval."
    },
    {
        "commandName": "du Command",
        "commandDescription": "du command is used to show disk space usage of files present in a directory as well as its sub-directories as follows."
    },
    {
        "commandName": "echo Command",
        "commandDescription": "echo command prints a text of line provided to it."
    },
    {
        "commandName": "eject Command",
        "commandDescription": "eject command is used to eject removable media such as DVD/CD ROM or floppy disk from the system."
    },
    {
        "commandName": "env Command",
        "commandDescription": "env command lists all the current environment variables and used to set them as well."
    },
    {
        "commandName": "exit Command",
        "commandDescription": "exit command is used to exit a shell like so."
    },
    {
        "commandName": "expr Command",
        "commandDescription": "expr command is used to calculate an expression as shown below."
    },
    {
        "commandName": "factor Command",
        "commandDescription": "factor command is used to show the prime factors of a number."
    },
    {
        "commandName": "find Command",
        "commandDescription": "find command lets you search for files in a directory as well as its sub-directories. It searches for files by attributes such as permissions, users, groups, file type, date, size and other possible criteria."
    },
    {
        "commandName": "free Command",
        "commandDescription": "free command shows the system memory usage (free, used, swapped, cached, etc.) in the system including swap space. Use the -h option to display output in human friendly format."
    },
    {
        "commandName": "grep Command",
        "commandDescription": "grep command searches for a specified pattern in a file (or files) and displays in output lines containing that pattern as follows."
    },
    {
        "commandName": "groups Command",
        "commandDescription": "groups command displays all the names of groups a user is a part of like this."
    },
    {
        "commandName": "gzip Command",
        "commandDescription": "Gzip helps to compress a file, replaces it with one having a .gz extension as shown below:"
    },
    {
        "commandName": "gunzip Command",
        "commandDescription": "gunzip expands or restores files compressed with gzip command like this."
    },
    {
        "commandName": "head Command",
        "commandDescription": "head command is used to show first lines (10 lines by default) of the specified file or stdin to the screen:"
    },
    {
        "commandName": "history Command",
        "commandDescription": "history command is used to show previously used commands or to get info about command executed by a user."
    },
    {
        "commandName": "hostname Command",
        "commandDescription": "hostname command is used to print or set system hostname in Linux."
    },
    {
        "commandName": "hostnamectl Command",
        "commandDescription": "hostnamectl command controls the system hostname under systemd. It is used to print or modify the system hostname and any related settings:"
    },
    {
        "commandName": "hwclock",
        "commandDescription": "hwclock is a tool for managing the system hardware clock; read or set the hardware clock (RTC)."
    },
    {
        "commandName": "hwinfo Command",
        "commandDescription": "hwinfo is used to probe for the hardware present in a Linux system like this."
    },
    {
        "commandName": "id Command",
        "commandDescription": "id command shows user and group information for the current user or specified username as shown below."
    },
    {
        "commandName": "ifconfig Command",
        "commandDescription": "ifconfig command is used to configure a Linux systems network interfaces. It is used to configure, view and control network interfaces."
    },
    {
        "commandName": "ionice Command",
        "commandDescription": "ionice command is used to set or view process I/O scheduling class and priority of the specified process."
    },
    {
        "commandName": "iostat Command",
        "commandDescription": "iostat is used to show CPU and input/output statistics for devices and partitions. It produces useful reports for updating system configurations to help balance the input/output load between physical disks."
    },
    {
        "commandName": "ip Command",
        "commandDescription": "ip command is used to display or manage routing, devices, policy routing and tunnels. It also works as a replacement for well known ifconfig command."
    },
    {
        "commandName": "iptables Command",
        "commandDescription": "iptables is a terminal based firewall for managing incoming and outgoing traffic via a set of configurable table rules."
    },
    {
        "commandName": "iw Command",
        "commandDescription": "iw command is used to manage wireless devices and their configuration."
    },
    {
        "commandName": "iwlist Command",
        "commandDescription": "iwlist command displays detailed wireless information from a wireless interface. The command below enables you to get detailed information about the wlp1s0 interface."
    },
    {
        "commandName": "kill Command",
        "commandDescription": "kill command is used to kill a process using its PID by sending a signal to it (default signal for kill is TERM)."
    },
    {
        "commandName": "killall Command",
        "commandDescription": "killall command is used to kill a process by its name."
    },
    {
        "commandName": "kmod Command",
        "commandDescription": "kmod command is used to manage Linux kernel modules. To list all currently loaded modules, type."
    },
    {
        "commandName": "last Command",
        "commandDescription": "last command display a listing of last logged in users."
    },
    {
        "commandName": "ln Command",
        "commandDescription": "ln command is used to create a soft link between files using the -s flag like this."
    },
    {
        "commandName": "locate Command",
        "commandDescription": "locate command is used to find a file by name. The locate utility works better and faster than it’s find counterpart."
    },
    {
        "commandName": "login Command",
        "commandDescription": "login command is used to create a new session with the system. You’ll be asked to provide a username and a password to login as below."
    },
    {
        "commandName": "ls Command",
        "commandDescription": "ls command is used to list contents of a directory. It works more or less like dir command."
    },
    {
        "commandName": "lshw Command",
        "commandDescription": "lshw command is a minimal tool to get detailed information on the hardware configuration of the machine, invoke it with superuser privileges to get a comprehensive information."
    },
    {
        "commandName": "lscpu Command",
        "commandDescription": "lscpu command displays system’s CPU architecture information (such as number of CPUs, threads, cores, sockets, and more)."
    },
    {
        "commandName": "lsof Command",
        "commandDescription": "lsof command displays information related to files opened by processes. Files can be of any type, including regular files, directories, block special files, character special files, executing text reference, libraries, and stream/network files."
    },
    {
        "commandName": "lsusb Command",
        "commandDescription": "lsusb command shows information about USB buses in the system and the devices connected to them like this."
    },
    {
        "commandName": "man Command",
        "commandDescription": "man command is used to view the on-line reference manual pages for commands/programs like so."
    },
    {
        "commandName": "md5sum Command",
        "commandDescription": "md5sum command is used to compute and print the MD5 message digest of a file. If run without arguments, debsums checks every file on your system against the stock md5sum files:"
    },
    {
        "commandName": "mkdir Command",
        "commandDescription": "mkdir command is used to create single or more directories, if they do not already exist (this can be overridden with the -p option)."
    },
    {
        "commandName": "more Command",
        "commandDescription": "more command enables you to view through relatively lengthy text files one screenful at a time."
    },
    {
        "commandName": "mv Command",
        "commandDescription": "mv command is used to rename files or directories. It also moves a file or directory to another location in the directory structure."
    },
    {
        "commandName": "nano Command",
        "commandDescription": "nano is a popular small, free and friendly text editor for Linux; a clone of Pico, the default editor included in the non-free Pine package."
    },
    {
        "commandName": "nc/netcat Command",
        "commandDescription": "nc (or netcat) is used for performing any operation relating to TCP, UDP, or UNIX-domain sockets. It can handle both IPv4 and IPv6 for opening TCP connections, sending UDP packets, listening on arbitrary TCP and UDP ports, performing port scanning."
    },
    {
        "commandName": "netstat Command",
        "commandDescription": "netstat command displays useful information concerning the Linux networking subsystem (network connections, routing tables, interface statistics, masquerade connections, and multicast memberships)."
    },
    {
        "commandName": "nice Command",
        "commandDescription": "nice command is used to show or change the nice value of a running program. It runs specified command with an adjusted niceness. When run without any command specified, it prints the current niceness."
    },
    {
        "commandName": "nmap Command",
        "commandDescription": "nmap is a popular and powerful open source tool for network scanning and security auditing. It was intended to quickly scan large networks, but it also works fine against single hosts."
    },
    {
        "commandName": "nproc Command",
        "commandDescription": "nproc command shows the number of processing units present to the current process. It’s output may be less than the number of online processors on a system."
    },
    {
        "commandName": "openssl Command",
        "commandDescription": "The openssl is a command line tool for using the different cryptography operations of OpenSSL’s crypto library from the shell. The command below will create an archive of all files in the current directory and encrypt the contents of the archive file:"
    },
    {
        "commandName": "passwd Command",
        "commandDescription": "passwd command is used to create/update passwords for user accounts, it can also change the account or associated password validity period. Note that normal system users may only change the password of their own account, while root may modify the password for any account."
    },
    {
        "commandName": "pidof Command",
        "commandDescription": "pidof displays the process ID of a running program/command."
    },
    {
        "commandName": "ping Command",
        "commandDescription": "ping command is used to determine connectivity between hosts on a network (or the Internet):"
    },
    {
        "commandName": "ps Command",
        "commandDescription": "ps shows useful information about active processes running on a system. The example below shows the top running processes by highest memory and CPU usage."
    },
    {
        "commandName": "pstree Command",
        "commandDescription": "pstree displays running processes as a tree which is rooted at either PID or init if PID is omitted."
    },
    {
        "commandName": "pwd Command",
        "commandDescription": "pwd command displays the name of current/working directory as below."
    },
    {
        "commandName": "rdiff-backup Command",
        "commandDescription": "rdiff-backup is a powerful local/remote incremental backup script written in Python. It works on any POSIX operating system such as Linux, Mac OS X."
    },
    {
        "commandName": "reboot Command",
        "commandDescription": "reboot command may be used to halt, power-off or reboot a system as follows."
    },
    {
        "commandName": "rename Command",
        "commandDescription": "rename command is used to rename many files at once. If you’ve a collection of files with “.html” extension and you want to rename all of them with “.php” extension, you can type the command below."
    },
    {
        "commandName": "rm command",
        "commandDescription": "rm command is used to remove files or directories as shown below."
    },
    {
        "commandName": "rmdir Command",
        "commandDescription": "rmdir command helps to delete/remove empty directories as follows."
    },
    {
        "commandName": "scp Command",
        "commandDescription": "scp command enables you to securely copy files between hosts on a network, for example."
    },
    {
        "commandName": "shutdown Command",
        "commandDescription": "shutdown command schedules a time for the system to be powered down. It may be used to halt, power-off or reboot the machine like this."
    },
    {
        "commandName": "sleep Command",
        "commandDescription": "sleep command is used to delay or pause (specifically execution of a command) for a specified amount of time."
    },
    {
        "commandName": "sort Command",
        "commandDescription": "sort command is used to sort lines of text in the specified file(s) or from stdin as shown below"
    },
    {
        "commandName": "split Command",
        "commandDescription": "split as the name suggests, is used to split a large file into small parts."
    },
    {
        "commandName": "ssh Command",
        "commandDescription": "ssh (SSH client) is an application for remotely accessing and running commands on a remote machine. It is designed to offer a secure encrypted communications between two untrusted hosts over an insecure network such as the Internet."
    },
    {
        "commandName": "stat Command",
        "commandDescription": "stat is used to show a file or file system status like this (-f is used to specify a filesystem)."
    },
    {
        "commandName": "su Command",
        "commandDescription": "su command is used to switch to another user ID or become root during a login session. Note that when su is invoked without a username, it defaults to becoming root."
    },
    {
        "commandName": "sudo Command",
        "commandDescription": "sudo command allows a permitted system user to run a command as root or another user, as defined by the security policy such as sudoers."
    },
    {
        "commandName": "sum Command",
        "commandDescription": "sum command is used to show the checksum and block counts for each each specified file on the command line."
    },
    {
        "commandName": "tac Command",
        "commandDescription": "tac command concatenates and displays files in reverse. It simply prints each file to standard output, showing last line first."
    },
    {
        "commandName": "tail Command",
        "commandDescription": "tail command is used to display the last lines (10 lines by default) of each file to standard output."
    },
    {
        "commandName": "talk Command",
        "commandDescription": "talk command is used to talk to another system/network user. To talk to a user on the same machine, use their login name, however, to talk to a user on another machine use ‘user@host’."
    },
    {
        "commandName": "tar Command",
        "commandDescription": "tar command is a most powerful utility for archiving files in Linux."
    },
    {
        "commandName": "tee Command",
        "commandDescription": "tee command is used to read from standard input and prints to standard output and files as shown below."
    },
    {
        "commandName": "tree Command",
        "commandDescription": "The tree command is a tiny, cross-platform command-line program used to recursively list or display the content of a directory in a tree-like format."
    },
    {
        "commandName": "time Command",
        "commandDescription": "time command runs programs and summarizes system resource usage."
    },
    {
        "commandName": "top Command",
        "commandDescription": "top program displays all processes on a Linux system in regards to memory and CPU usage and provides a dynamic real-time view of a running system."
    },
    {
        "commandName": "touch Command",
        "commandDescription": "touch command changes file timestamps, it can also be used to create a file as follows."
    },
    {
        "commandName": "tr Command",
        "commandDescription": "tr command is a useful utility used to translate (change) or delete characters from stdin, and write the result to stdout or send to a file as follows."
    },
    {
        "commandName": "uname Command",
        "commandDescription": "uname command displays system information such as operating system, network node hostname kernel name, version and release etc."
    },
    {
        "commandName": "uniq Command",
        "commandDescription": "uniq command displays or omits repeated lines from input (or standard input). To indicate the number of occurrences of a line, use the -c option."
    },
    {
        "commandName": "uptime Command",
        "commandDescription": "uptime command shows how long the system has been running, number of logged on users and the system load averages as follows."
    },
    {
        "commandName": "users Command",
        "commandDescription": "users command shows the user names of users currently logged in to the current host like this."
    },
    {
        "commandName": "vim/vi Command",
        "commandDescription": "vim (Vi Improved) popular text editor on Unix-like operating systems. It can be used to edit all kinds of plain text and program files."
    },
    {
        "commandName": "w Command",
        "commandDescription": "w command displays system uptime, load averages and information about the users currently on the machine, and what they are doing (their processes) like this."
    },
    {
        "commandName": "wall Command",
        "commandDescription": "wall command is used to send/display a message to all users on the system as follows."
    },
    {
        "commandName": "watch Command",
        "commandDescription": "watch command runs a program repeatedly while displaying its output on fullscreen. It can also be used to watch changes to a file/directory. The example below shows how to watch the contents of a directory change."
    },
    {
        "commandName": "wc Command",
        "commandDescription": "wc command is used to display newline, word, and byte counts for each file specified, and a total for many files."
    },
    {
        "commandName": "wget Command",
        "commandDescription": "wget command is a simple utility used to download files from the Web in a non-interactive (can work in the background) way."
    },
    {
        "commandName": "whatis Command",
        "commandDescription": "whatis command searches and shows a short or one-line manual page descriptions of the provided command name(s) as follows."
    },
    {
        "commandName": "which Command",
        "commandDescription": "which command displays the absolute path (pathnames) of the files (or possibly links) which would be executed in the current environment."
    },
    {
        "commandName": "who Command",
        "commandDescription": "who command shows information about users who are currently logged in like this."
    },
    {
        "commandName": "whereis Command",
        "commandDescription": "whereis command helps us locate the binary, source and manual files for commands."
    },
    {
        "commandName": "xargs Command",
        "commandDescription": "xargs command is a useful utility for reading items from the standard input, delimited by blanks (protected with double or single quotes or a backslash) or newlines, and executes the entered command."
    },
    {
        "commandName": "yes Command",
        "commandDescription": "yes command is used to display a string repeatedly until when terminated or killed using [Ctrl + C] as follows."
    },
    {
        "commandName": "youtube-dl Command",
        "commandDescription": "youtube-dl is a lightweight command-line program to download videos and also extract MP3 tracks from YouTube.com and a few more sites."
    },
    {
        "commandName": "zcmp/zdiff Command",
        "commandDescription": "zcmp and zdiff minimal utilities used to compare compressed files as shown in the examples below."
    },
    {
        "commandName": "zip Command",
        "commandDescription": "zip is a simple and easy-to-use utility used to package and compress (archive) files."
    },
    {
        "commandName": "zz Command",
        "commandDescription": "zz command is an alias of the fasd commandline tool that offers quick access to files and directories in Linux. It is used to quickly and interactively cd into a previously accessed directory by selecting the directory number from the first field as follows."
    },

];