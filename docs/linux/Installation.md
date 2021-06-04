1. Go to Quartus [download](https://fpgasoftware.intel.com/?edition=lite) page
2. Make sure you have following options selected on download page<br />
**Edition**: `Lite`<br />
**Release**: `20.1.1`<br />
**Operating System**: `Linux`<br />
3. Select **combined files** and click download button![Quartus Download Button](./../assets/quartus-download-button.png).
<!-- <div class="video-container">
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/uquYDc8Wff0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
</div> -->
4. Now you will be asked to login. If you already have an account on intel website, use that credentials to login; otherwise register for a new individual account.
:::note
You can use your gmail ID for new account registration.
:::
5. Download Quartus and extract it's contents. 
6. Now run following commands on your terminal (assuming you have **sudo** privileges)
    - For Ubuntu 16.04
      ```bash
      sudo dpkg --add-architecture i386
      ```
      ```bash
      sudo apt-get update
      ```
      ```bash
      sudo apt-get install libxft2 libxft2:i386 libncurses5 libncurses5:i386 libxtst6 \
        libsm6:i386 libxtst6:i386 gcc-multilib g++-multilib lib32z1 lib32stdc++6 lib32gcc1 \
        expat:i386 fontconfig:i386 libfreetype6:i386 libexpat1:i386 libc6:i386 libgtk-3-0:i386 \
        libcanberra0:i386 libpng12-0:i386 libice6:i386 libsm6:i386 \
        libncurses5:i386 zlib1g:i386 libx11-6:i386 libxau6:i386 libxdmcp6:i386 \
        libxext6:i386 libxft2:i386 libxrender1:i386 libxt6:i386 libxtst6:i386 \
        /
      ```
   - For Ubuntu 18.04 and above
      ```bash
      sudo dpkg --add-architecture i386
      ```
      ```bash
      sudo apt-get update
      ```
      ```bash
      sudo apt-get install libxft2 libxft2:i386 libncurses5 libncurses5:i386 libxtst6 libsm6:i386 libxtst6:i386 \
        gcc-multilib g++-multilib lib32z1 lib32stdc++6 lib32gcc1 \
        expat:i386 fontconfig:i386 libfreetype6:i386 libexpat1:i386 libc6:i386 \
        libgtk-3-0:i386 libcanberra0:i386 libice6:i386 libsm6:i386 \
        libncurses5:i386 zlib1g:i386 libx11-6:i386 libxau6:i386 libxdmcp6:i386 \
        libxext6:i386 libxft2:i386 libxrender1:i386 libxt6:i386 libxtst6:i386 \
        /
      ```
7. In the extracted folder there will be `setup.sh` file. Open terminal and change working directory to the folder where `setup.sh` is present and run the following commands.
  ```bash
  sudo chmod +x ./setup.sh
  ```
  ```bash
  sudo chmod +x components/*
  ```
  ```bash
  ./setup.sh
  ```
8. Follow the GUI installation instruction