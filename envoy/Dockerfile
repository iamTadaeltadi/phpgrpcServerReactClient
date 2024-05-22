FROM envoyproxy/envoy:v1.15.0

# COPY envoy.yaml /etc/envoy/envoy.yaml

# CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /dev/stdout
# FROM envoyproxy/envoy:dev-fbae6c7344b1d8a80804e42dedb7528d743db9e9
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml