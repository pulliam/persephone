# Netcat Checklist

Netcat is a simple Unix utility which reads and writes data across a network connection.

## Installation

First we'll need to install a newer version

For **Macs** we'll install it with `brew`

```bash
# You can run this command from anywhere in the terminal
$ brew install netcat
```

On **Linux** run the following

1. `sudo apt-get install netcat-traditional`
2. `sudo update-alternatives --config nc`
3. Select the option `/bin/nc.traditional` (2)

Type `netcat -h`, and ensure that the flag `-e` is listed!

## Configuration

It's also a good idea to have our `IP Address` handy

On a Mac you can hold down the `OPTION` key and click on the WIFI symbol in your menu bar to find your IP ADDRESS. 

```bash
192.168.40.122 # Yours will be different. Like a snowflake!
```

> If you don't see an IP address, check with an instructor!

## Exploration

Once `netcat` is installed, research with a partner and break down what the 
following line of code is doing using `netcat -h`.

 ```bash
 $ netcat -lp 3000 -v -e "ruby example_script.rb"
 ```

- `netcat`
- `l`
- `p`
- `3000`
- `v`
- `e`
- `ruby`
- `example_script.rb`

Altogether what is the above line of code going to do?

## Demonstration

1. Open up two terminal windows and place them side by side.
2. In the **right-hand** window enter the following

 ```bash
 $ netcat -lp 3000
 ```
3. In the **left-hand** window enter the following

 ```bash
 $ netcat 127.0.0.1 3000
 ```

4. Try typing in the left-window and hit `enter`. What happens? Type in the 
right-hand window and hit `enter`. What's happenning!?

## Let's have a conversation

1. Pair up and exchange IP Addresses with your neighbor
2. The partner on the **right** should enter the following into their terminal

```bash
$ netcat -lp 3000
```

3. The partner on the **left** should then enter the following into their terminal

```bash
$ netcat PARTNER_ON_THE_RIGHTS_IP_ADDRESS 3000
```

4. The partner on the left should try typing and hit `enter`. 
What happens? 
The partner on the right should type and hit `enter`. 
What's happenning!?

# Activity

Chatting is fine, but what if we wanted to have a formalized way of interacting?

> Devise a set of rules or a protocol so that, no two people are talking at the 
same time and that you know your message has been received.

Question for the server (whoever runs `netcat -lp 3000`)

> What if you received messages from multiple people, but had no way of remembering
a person's previous message. What information would they need to send in order to 
keep up a conversation?

#### More Information

 - [Netcat Wiki](http://en.wikipedia.org/wiki/Netcat)
 - [Netcat Cheatsheet](http://www.sans.org/security-resources/sec560/netcat_cheat_sheet_v1.pdf)
 - [IP Address](http://en.wikipedia.org/wiki/IP_address)
 - [Netcat Source](http://netcat.sourceforge.net/)
