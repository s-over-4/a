# abstract

The server communicates with clients through a json-based api.
The general structure of one of these packets is as follows:
```json
{
   "type": <packet-type> <required>,
   "time": <send-time> <required>,
   "data": {
      <packet-specific-data> <required>
   }
}

```

Clients connected to the server will send similar packets:
```json
{
   "type": <packet-type> <string> <required>,
   "time": <send-time> <timestamp> <required>,
   "data": {
      <packet-specific-data> <any> <required>
   },
   "token": <client-token> <string> <optional>
}

```



