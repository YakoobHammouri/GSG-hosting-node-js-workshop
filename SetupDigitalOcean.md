# Setup Digital Ocean
### [Digital Ocean Site](https://www.digitalocean.com/)

It is a unique cloud hosting provider that offers cloud computing services to business entities. In January 2018, it achieved the title of being the third-largest cloud hosting company in the world in terms of web-facing computers.

### Reasons to Use DigitalOcean :
- Pricing
- modern & Simple User Interface
- Performance (SSD-based, IPV6)
- Professional Documentation
- Active Digital Community



# Setup Digital Ocean
1. [Registrations](https://cloud.digitalocean.com/registrations/new)
2. Open your dashBoard to [Create Droplets](https://www.digitalocean.com/docs/droplets/how-to/create/)
3. at image Step , choose [marketplace](https://www.digitalocean.com/docs/marketplace/)
4. in marketplace search about `plesk` and be sure to choose Plesk on Ubuntu
5. at plan Step , choose Basic pLan then choose fisrt plan `5$/mo`


<img src="https://i.imgur.com/cxkRMXg.png" width="600" height="400">


6. at datacenter region choose anyone you want
7. at Authentication you can chooes SSH Key or Password , we will choose Password option , then enter your password 
```
notes: this password for root user and  using to login to Dropte by SSH

```
8. Finalize and create

9. after Droplet Created coye IP Address then open terminal to login to Droplet by SSH


![](https://i.imgur.com/Ybz3mYQ.jpg)


11. in terminal type `ssh root@DropletIP` then enter your password

![](https://i.imgur.com/FDtbXTf.jpg)


12. run `sudo plesk login` command, the command generate URL to create Plesk control panel

![](https://i.imgur.com/nyiaooF.jpg)


13. copy the URL then useing in browser , you will get this page  to create your plesk panel

```
I Prefer to enter Gmail, where you can enable login 
by google authentication after created a panel,
also you can use Facebook or GitHub Email to log in 
```
![](https://i.imgur.com/z0qXKQv.jpg)
 

### finally, your VPS Server ready to start Hosting
