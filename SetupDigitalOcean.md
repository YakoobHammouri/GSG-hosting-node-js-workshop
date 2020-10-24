# DigitalOcean

[DigitalOcean](https://www.digitalocean.com/) considered as a unique cloud hosting provider that offers cloud computing services to business entities. In January 2018, it achieved the title of being the third-largest cloud hosting company in the world in terms of web-facing computers.

### Reasons why you should Use DigitalOcean?
- Affordable pricing
- Modern & Simple User Interface
- High Performance (SSD-based, IPV6)
- Professional Documentation
- Active Digital Community

---
### Setup DigitalOcean
1. [Registration](https://cloud.digitalocean.com/registrations/new)
   - if you are within a team, you may recieve an invitation that you can register through, the webiste would ask you to register using your email, then you will see an option of choosing your payment method (don't worry a bout it).
   -  On the same page, go into your profile icon up to the right and select **gsg-workshop** account. 

2. On your Dashboard Navbar click on [Create ](https://www.digitalocean.com/docs/droplets/how-to/create/)then choose, Droplets option.
3. At image step, choose [marketplace](https://www.digitalocean.com/docs/marketplace/)
4. In marketplace tab search for`Plesk` app and make sure to choose Plesk on Ubuntu, as in the figure below.
5. Then at plan section, select Basic pLan and pick`5$/mo` option.


<img src="https://i.imgur.com/cxkRMXg.png" width="600" height="400" align-items="center">.


6. At datacenter region choose whatever region you want.

7. for Authentication you can choose `SSH Key` or a `Password` , we will choose `Password` option , then enter your password.

```
Notes: This password is for root user and will be used to login to Droplet by SSH
```


8. Finalize and create.

9. After your Droplet is been created copy your IP Address then open your terminal to login into Droplet by SSH.


<img src="https://i.imgur.com/Ybz3mYQ.jpg" width="400">.


11. In your terminal type `ssh root@DropletIP` then enter your password.


<img src="https://i.imgur.com/FDtbXTf.jpg" width="400">.


12. run `sudo plesk login` command. This command will generate an URL to create Plesk control panel


<img src="https://i.imgur.com/nyiaooF.jpg" width="400">.

13. Copy the last given URL then paste it into your browser, you will get this page to create your plesk Cpanel.

```
I Prefer registering using Gmail, where you can enable login by google authentication after creating your panel,
also you can use Facebook or GitHub Email to login 
```

<img src="https://i.imgur.com/z0qXKQv.jpg" width="400">.


### Finally, your VPS Server ready to start Hosting :tada: 

