<?php

    session_start();
    
    class apps_libs_userIdentify{
        
        public $username;
        public $password;
  
        protected $id;
        protected $kind;
        
        public function __construct($username = "", $password = "") {
            $this->username = $username;
            $this->password = $password;
        }
        
        public function encryptPassword(){
            return md5($this->password);
        }
        
        public function login(){
            $admin = new apps_libs_dbConnection();
            $pass = $this->encryptPassword();
            $sql_admin = "select * from admin where admin_username = '$this->username' and admin_password = '$pass' limit 1";
            $result_admin = $admin->select($sql_admin);
            if($result_admin){
                //$_SESSION["id"] = $result_admin[0]["admin_id"];
                $_SESSION["username"] = $result_admin[0]["admin_username"];
                $_SESSION["name"] = $result_admin[0]["admin_username"];
                $_SESSION["kind"] = "admin";
                setcookie("username", $result_admin[0]["admin_username"], time()+ 604800);
                setcookie("password", $this->password, time()+ 604800);
                return "admin";
            }
            
            $user = new apps_libs_dbConnection();
            $sql_user = "select * from owner where owner_username = '$this->username' and owner_password = '$pass' limit 1";
            $result_user = $user->select($sql_user);
            if($result_user){
                //$_SESSION["id"] = $result_user[0]["user_id"];
                $_SESSION["username"] = $result_user[0]["owner_username"];
                $_SESSION["name"] = $result_user[0]["owner_name"];
                $_SESSION["kind"] = "owner";
                setcookie("username", $result_user[0]["owner_username"], time()+ 604800);
                setcookie("password", $this->password, time()+ 604800);
                return "owner";
            }
            
            return NULL;
        }
        
        public function logout(){
            unset($_SESSION["id"]);
            unset($_SESSION["username"]);
            unset($_SESSION["kind"]);
            unset($_SESSION["name"]);
        }
        
        public function getSESSION($name){
            if($name !=null )
                return isset($_SESSION[$name]) ? $_SESSION[$name] : NULL;
            return $_SESSION;
        }
        
      
        
        public function isLogin(){
            if($this->getSESSION("id")){
                if($this->getSESSION("kind") == "owner")
                    return "owner";
                else
                    return "admin";
            }
            else
                return NULL;
        }
        
        public function getID(){
            return $this->getSESSION("username");
        }
        
    }

?>