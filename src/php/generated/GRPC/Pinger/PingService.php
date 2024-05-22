<?php

namespace GRPC\Pinger;

use GRPC\Pinger\PingServiceInterface;
use GRPC\Pinger\PingRequest;
use GRPC\Pinger\PingResponse;
// use generated\Proto\PingRequest;
// use generated\Proto\PingResponse;
// use generated\Proto\PingServiceInterface;
use Spiral\GRPC;

class PingService implements PingServiceInterface
{
    /**
     * @param GRPC\PingServiceInterface $ctx
     * @param PingRequest $in
     * @return PingResponse
     *
     * @throws GRPC\Exception\InvokeException
     */
    public function Ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse
    {
        $response = new PingResponse();
        $response->setMessage($in->getMessage());  // Echo the input string
        return $response;
    }
}
