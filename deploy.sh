echo "Deploying Current Project to Now.sh"
echo "Building Project"
yarn generate
echo "Project built... Deploying"
cd ./dist && now
echo "Project Deployed, Please login to now.sh and alias your url."
echo "Thanks for using Deploy.sh"