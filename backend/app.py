#!/usr/bin/env python3

import http.server
import socketserver

import api

BIND = "127.0.0.1"
PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler


class CustomRequestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        # Send a response header
        self.send_response(200)
        self.send_header("Content-Type", "text/html")
        self.end_headers()

        # Prepare a custom response
        response = "<html><head><title>Custom HTTP Server</title></head>"
        response += "<body><h1>Hello from the custom HTTP server!</h1></body></html>"

        # Send the response
        self.wfile.write(response.encode())
        api.gpt()


def main():
    with socketserver.TCPServer((BIND, PORT), CustomRequestHandler) as httpd:
        print(f"Serving on http://{BIND}:{PORT}", flush=True)
        httpd.serve_forever()


if __name__ == "__main__":
    main()
