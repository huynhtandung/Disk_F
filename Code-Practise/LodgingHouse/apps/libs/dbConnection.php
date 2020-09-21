<?php

    class apps_libs_dbConnection{
        
        protected $username ="root";
        protected $password = "";
        protected $host = "localhost";
        protected $database = "lodginghouse";
        protected $tableName;
        protected static $connectionInstance = null;
        
        public function __construct() {
            $this->connect();
        }
        
        public function connect(){
            if(self::$connectionInstance == null){
                try{
                    self::$connectionInstance = new PDO('mysql:host='.$this->host.';dbname='.$this->database,$this->username,$this->password);
                    self::$connectionInstance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                } catch (Exception $ex) {
                    echo "ERROR: ".$ex->getMessage();
                    die();
                }
            }
            return self::$connectionInstance;
        }
        
        public function executedSQL($sql){
            $ex = self::$connectionInstance->prepare($sql);
            $ex->execute();
            return $ex;
        }
        
        public function select($sql){
            $result = $this->executedSQL($sql);
            return $result->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function insert($sql){
            $result = $this->executedSQL($sql);
            if($result)
                return self::$connectionInstance->lastInsertId();
            else
                return FALSE;
        }
        
        public function update($sql){
            $result = $this->executedSQL($sql);
        }
        
        public function delete($sql){
            $result = $this->executedSQL($sql);
        }       
    }

?>
