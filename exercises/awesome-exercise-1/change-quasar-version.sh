if [ "$1" != "0" -a "$1" != "1" ]
then
   echo "Use: $0 <0|1>"
fi

if [ "$1" == "0" ]
then
   sudo npm remove -g @quasar/cli
   sudo npm remove -g @vue/cli

   sudo npm install -g quasar-cli
   sudo npm install -g vue-cli
fi

if [ "$1" == "1" ]
then
   sudo npm remove -g quasar-cli
   sudo npm remove -g vue-cli

   sudo npm install -g @quasar/cli
   sudo npm install -g @vue/cli
fi

