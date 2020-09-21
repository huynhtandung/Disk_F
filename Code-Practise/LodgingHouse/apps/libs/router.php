<?php

    class apps_libs_router{
        
        const PARAM_NAME = "r";
        const INDEX = "index";
        const WELCOME = "welcome";
        const ADMIN_PAGE = "admin/home";
        const PUBLIC_PAGE = "public/homeOwner";
        const LIST = 'public/lodgingHouse/listLodgingHouse';
        
        public static $sourcePath;
        
        public function __construct($sourcePath = "") {
            if($sourcePath)
                self::$sourcePath = $sourcePath;
        }
        
        public function getGET($name){
            if($name!=NULL)
                return isset($_GET[$name])? $_GET[$name] : NULL;
            return $_GET;
        }
         
        public function getPOST($name){
            if($name!=NULL)
                return isset($_POST[$name])? $_POST[$name] : NULL;
            return $_POST;
        }
        
        public function router(){
            $url = $this->getGET(self::PARAM_NAME);
            if(!is_string($url) || !$url || $url == self::INDEX){
                $url = self::WELCOME;
            }
            $path = self::$sourcePath."\\".$url.".php";
           
          
            if(file_exists($path))
                return require_once $path;
            else 
                $this->pageError("Page Not Found");
          
        }
        
        public function createUrl($url, $params = []){
            if($url)
                $params[self::PARAM_NAME] = $url;
            return $_SERVER["PHP_SELF"]."?".http_build_query($params);
        }


        public function pageError($error){
            echo $error;
            die();
        }
               
        public function redirect($url){
            $u = $this->createUrl($url);
            header("Location:$u");
        }
    
        public function adminPage(){
            $this->redirect(self::ADMIN_PAGE);
        }
    
        public function loginPage(){
            $this->redirect("welcome");
        }
        
        public function publicPage(){
            $this->redirect(self::PUBLIC_PAGE);
        }

        public function welcomePage(){
            $this->redirect(self::WELCOME);
        }

        public function list(){
            $this->redirect(self::LIST);
        }
    }

?>