<?php
declare(strict_types=1);
require "vendor/autoload.php";
/**
 * Sample GRPC PHP server.
 */
use Spiral\Goridge;
use Spiral\RoadRunner;
use GRPC\Pinger\PingServiceInterface;
use GRPC\Pinger\PingService;

ini_set('display_errors', 'stderr');
$server = new \Spiral\GRPC\Server();
$server->registerService(PingServiceInterface::class, new PingService());
$w = new RoadRunner\Worker(new Goridge\StreamRelay(STDIN, STDOUT));
$server->serve($w);
